"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const ID_TO_ANIMAL = {
  "1501149956": { name: "Emperor Penguin", slug: "penguin", img: "/images/placeholder.jpg" },
  "2948510468": { name: "Savannah Elephant", slug: "elephant", img: "/images/placeholder.jpg" },
  "0028578564": { name: "Bengal Tiger", slug: "tiger", img: "/images/placeholder.jpg" },
};

export default function Home() {
  const router = useRouter();
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
      if (!id) return;

      const matched = ID_TO_ANIMAL[id];
      if (matched?.slug) {
        router.push(`/animals/${matched.slug}`);
      } else {
        setAnimal({ name: `Unknown (${id})`, img: "/images/placeholder.jpg", unknown: true });
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

        {animal && animal.unknown && (
          <div className="container">
            <div className="fact-file">
              <div>
                <h2>{animal.name}</h2>
                <Image src={animal.img} alt={animal.name} width={300} height={300} />
              </div>
              <p>Scanned NFC tag did not match a known animal. Please try again with a valid tag.</p>
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
