import { observer, useLocalObservable } from "mobx-react-lite";
import React, { useEffect } from "react";

import Guess from "@/components/Guess/Guess";
import NextButton from "@/components/NextButton/NextButton";
import Result from "@/components/Result/Result";
import Sound from "@/components/Sound/Sound";
import WordLength from "@/components/WordLength/WordLength";
import SponicsStore from "@/stores/SponicsStore";
import ControlButtons from "@/components/ControlButtons/ControlButtons";

export default observer(function Home() {
  const store = useLocalObservable(() => SponicsStore);
  useEffect(() => {
    // store.init();

    window.addEventListener("keyup", store.handleKeyup);

    return () => {
      window.removeEventListener("keyup", store.handleKeyup);
    };
  }, []);

  return (
    <>
      <div
        className="flex h-screen w-screen flex-col items-center justify-center bg-black"
        data-cy="mainContainer"
      >
        <h1 className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-8xl font-bold text-transparent pb-8">
          Sponics
        </h1>
        <WordLength store={store} />
        <Sound sound={store.sound} />
        <NextButton store={store} />
        <Guess wordLength={store.wordLength} guess={store.guess} />
        <Result resultMessage={store.resultMessage} />
        <ControlButtons />
      </div>
    </>
  );
});
