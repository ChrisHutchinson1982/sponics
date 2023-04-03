export default function Guess({ wordLength, guess, result }) {
  return (
    <>
      <div className={`m-2 grid grid-cols-${wordLength} gap-2`}>
        {new Array(wordLength).fill(0).map((_, i) => {
          const bgColor =
            result === "Correct, well done!"
              ? "bg-green-600"
              : result === "Not a word, try again..."
              ? "bg-red-600"
              : "bg-white";

          return (
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-m border border-blue-600 font-bold lowercase text-gray-800 ${bgColor}`}
              key={i}
              data-cy={`guessLetter${i + 1}`}
            >
              {guess[i]}
            </div>
          );
        })}
      </div>
    </>
  );
}
