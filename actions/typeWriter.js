import { useEffect, useState, useRef } from "react";  

export default function typeWriting() {
  const [text, setText] = useState("");
  const fullText = "CS @ Cornell | Engaged Learner";
  const typingSpeed = 80;

  const indexRef = useRef(0); // This persists across renders

  useEffect(() => {
    const typeWriter = () => {
      const i = indexRef.current;
      if (i < fullText.length) {
        setText((prev) => prev + fullText[i]);
        indexRef.current = i + 1;
        setTimeout(typeWriter, typingSpeed);
      }
    }    
    typeWriter();
  }, [])

  return text
}