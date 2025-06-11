'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function Casual() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null); // ⬇️ Ref to bottom

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: input },
    ]);

    console.log("User input:", input);

    try {
      const response = await fetch('/api/chatyjt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
      });
      const data = await response.json();
      console.log("Response from API:", data);

      // Add the bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: data.reply },
      ]);
    } catch (error) {
      console.error("Error fetching response from API:", error);
    }

    // Clear the input field
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-between h-[80vh] w-[50vw] shadow-2xl shadow-black rounded-lg overflow-hidden">
        <div className="flex flex-col gap-4 p-4 h-full w-full overflow-y-auto bg-green-100">
            
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[70%] ${
                  message.sender === 'user'
                    ? 'bg-green-500 text-white'
                    : 'bg-green-700 text-white'
                }`}
              >
                {message.text}
              </div>
              <div ref={bottomRef}/>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-4 p-4 border-t border-gray-700 w-full bg-green-800">
          <input
            type="text"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 rounded-lg bg-white text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Send
          </button>
        </div>
    </div>

  );
}