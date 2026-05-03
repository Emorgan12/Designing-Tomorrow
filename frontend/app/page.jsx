"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ID_TO_ANIMAL = {
  "1501149956": { name: "Penguin", img: "/images/placeholder.jpg" },
  "2948510468": { name: "Elephant", img: "/images/placeholder.jpg" },
  "0028578564": { name: "Tiger", img: "/images/placeholder.jpg" },
};

export default function Home() {
  const [scanning, setScanning] = useState(false);
  const [animal, setAnimal] = useState(null);
  const [buffer, setBuffer] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!scanning) return;
    setBuffer("");
    // focus the offscreen input so the keyboard-emulating scanner types into it
    setTimeout(() => inputRef.current?.focus(), 0);
  }, [scanning]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const id = buffer.trim();
      setBuffer("");
      setScanning(false);
      if (id) {
        const matched = ID_TO_ANIMAL[id] || { name: `Unknown (${id})`, img: "/images/placeholder.jpg" };
        setAnimal(matched);
      }
    }
  };

  return (
    <main className="main">
      <div className="container">

        {scanning && (
          <>
            <input
              ref={inputRef}
              value={buffer}
              onChange={(e) => setBuffer(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
              aria-hidden
              autoFocus
            />
            <div className="scan-indicator">Scanning... (scan now)</div>
          </>
        )}

        {animal && (
          <div className="container">
            <div className="fact-file">
              <div>
                <h2>{animal.name}</h2>
                <Image src={animal.img} alt={animal.name} width={300} height={300} />
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis vulputate lorem. Maecenas vestibulum mollis diam.
              </p>
            </div>
            <div className="quiz">
              <h2>Quiz</h2>
              <h3>Question 1: What is the capital of France?</h3>
              <ul>
                <li>A) Berlin</li>
                <li>B) Madrid</li>
                <li>C) Paris</li>
                <li>D) Rome</li>
              </ul>
            </div>
          </div>
        )}

        <button className="button" onClick={() => { setAnimal(null); setScanning(true); }}>
          Scan New Animal
        </button>
      </div>
    </main>
  );
}
