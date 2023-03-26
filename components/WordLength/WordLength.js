export default function WordLength({ wordLength, setWordLength }) {
  const changeWordLength = (e) => {
    setWordLength(parseInt(e.target.value));
  };

  return (
    <>
      <div className="mb-2 grid grid-cols-4 gap-2">
        {new Array(4).fill(0).map((_, i) => {
          const length = i + 3;
          const bgColor = length === wordLength ? "bg-blue-200" : "bg-white";

          return (
            <button
              className={`flex h-12 w-12 items-center justify-center rounded border border-blue-600 font-bold uppercase text-gray-800 ${bgColor}`}
              key={length}
              value={length}
              data-cy={`wordLength${length}`}
              onClick={changeWordLength}
            >
              {length}
            </button>
          );
        })}
      </div>
    </>
  );
}
