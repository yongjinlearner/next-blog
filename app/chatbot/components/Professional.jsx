'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function Professional() {
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
      const response = await fetch('/api/anthropicAI', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: input }),
      });
      const data = await response.json();
      console.log("Response from API:", data);

      // Add the bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: data.response },
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
      <div className="flex flex-col items-center justify-between h-[80vh] w-[50vw] shadow-2xl shadow-black rounded-lg overflow-hidden bg-gray-800">
        {/* Chat History */}
        <div className="flex flex-col gap-4 p-4 h-full w-full overflow-y-auto bg-gray-700">
          
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
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-600 text-white'
                }`}
              >
                {message.text}
              </div>
              <div ref={bottomRef}/>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-4 p-4 border-t border-gray-700 w-full bg-gray-800">
          <input
            type="text"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
  );
}