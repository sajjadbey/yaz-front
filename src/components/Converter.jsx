import { useState, useEffect } from "react";
import { convertOldTurkic } from "../api";

export default function OldTurkicConverter() {
  const [inputText, setInputText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  useEffect(() => {
    if (!inputText) {
      setConvertedText("");
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const data = await convertOldTurkic(inputText);
        setConvertedText(data); // assuming API returns { result: "..." }
      } catch (err) {
        console.error("Conversion error:", err);
      }
    }, 200); // debounce 200ms

    return () => clearTimeout(timeout); // cancel previous request if typing continues
  }, [inputText]);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <textarea
        placeholder="Type Azerbaijani..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={10}
        style={{ flex: 1 }}
      />
      <textarea
        placeholder="Old Turkic output..."
        value={convertedText}
        readOnly
        rows={10}
        style={{ flex: 1 }}
      />
    </div>
  );
}
