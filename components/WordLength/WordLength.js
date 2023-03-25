import React, { useState } from "react";

export default function WordLength() {
  const [wordLength, setWordLength] = useState(4);

  return (
    <>
      <div className="mb-2 grid grid-cols-4 gap-2">
        {new Array(4).fill(0).map((_, i) => {
          const length = i + 3;
          const bgColor = length === wordLength ? "bg-blue-200" : "bg-white";

          return (
            <button
              className={`flex h-12 w-12 items-center justify-center rounded border border-blue-600 font-bold uppercase text-gray-800 ${bgColor}`}
              key={i}
            >
              {length}
            </button>
          );
        })}
      </div>
    </>
  );
}
