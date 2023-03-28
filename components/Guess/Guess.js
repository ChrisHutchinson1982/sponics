export default function Guess({ wordLength, guess }) {
  return (
    <>
      <div className={`mb-2 grid grid-cols-${wordLength} gap-2`}>
        {new Array(wordLength).fill(0).map((_, i) => {
          return (
            <div
              className={`flex h-16 w-16 items-center justify-center rounded border border-blue-600 font-bold lowercase text-gray-800 bg-white`}
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
