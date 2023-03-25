import React, { useState } from "react";

import Guess from "@/components/Guess/Guess";
import NewButton from "@/components/NewButton/NewButton";
import Result from "@/components/Result/Result";
import Sound from "@/components/Sound/Sound";
import WordLength from "@/components/WordLength/WordLength";

export default function Home() {
  const [wordLength, setWordLength] = useState(4);
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
        <h1 className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-8xl font-bold text-transparent p-8">
          Sponics
        </h1>
        <WordLength wordLength={wordLength} setWordLength={setWordLength} />
        <Sound />
        <NewButton />
        <Guess />
        <Result />
      </div>
    </>
  );
}
