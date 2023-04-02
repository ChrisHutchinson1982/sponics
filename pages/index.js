import { observer, useLocalObservable } from "mobx-react-lite";
import React, { useEffect } from "react";

import Guess from "@/components/Guess/Guess";
import Button from "@/components/Button/Button";
import Result from "@/components/Result/Result";
import Sound from "@/components/Sound/Sound";
import WordLength from "@/components/WordLength/WordLength";
import SponicsStore from "@/stores/SponicsStore";
import ControlButtons from "@/components/ControlButtons/ControlButtons";
import Qwerty from "@/components/Qwerty/Qwerty";

export default observer(function Home() {
  const store = useLocalObservable(() => SponicsStore);
  useEffect(() => {
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
        <h1 className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-6xl font-bold text-transparent pb-4">
          Sponics
        </h1>
        <WordLength store={store} />
        <Sound sound={store.sound} />
        <Button
          buttonType={{ name: "next", action: store.changeSound, width: 24 }}
          i={0}
        />
        <Guess wordLength={store.wordLength} guess={store.guess} />
        <Result resultMessage={store.resultMessage} />
        <ControlButtons store={store} />
        <Qwerty />
      </div>
    </>
  );
});
