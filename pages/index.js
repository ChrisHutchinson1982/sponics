import { observer, useLocalObservable } from "mobx-react-lite";
import React, { useState, useEffect } from "react";

import Guess from "@/components/Guess/Guess";
import NextButton from "@/components/NextButton/NextButton";
import Result from "@/components/Result/Result";
import Sound from "@/components/Sound/Sound";
import WordLength from "@/components/WordLength/WordLength";
import SponicsStore from "@/stores/SponicsStore";

export default observer(function Home() {
  const store = useLocalObservable(() => SponicsStore);
  useEffect(() => {
    store.init();
  }, []);

  const [wordLength, setWordLength] = useState(4);
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
        <h1 className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-8xl font-bold text-transparent p-8">
          Sponics
        </h1>
        <WordLength wordLength={wordLength} setWordLength={setWordLength} />
        <Sound sound={store.sound} />
        <NextButton store={store} />
        <Guess wordLength={wordLength} />
        <Result />
      </div>
    </>
  );
});
