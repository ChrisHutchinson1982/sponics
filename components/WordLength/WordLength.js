export default function WordLength() {
  const wordLengths = [
    [3, false],
    [4, true],
    [5, false],
    [6, false],
  ];

  return (
    <>
      <h2 className="text-1xl p-2 font-bold text-gray-800">Word length?</h2>
      <div className="mb-2 grid grid-cols-4 gap-2">
        {wordLengths.map((length, i) => {
          const bgColor = length[1] ? "bg-blue-200" : "bg-white";

          return (
            <div
              className={`flex h-12 w-12 items-center justify-center rounded border border-blue-600 font-bold uppercase text-gray-800 ${bgColor}`}
            >
              {length[0]}
            </div>
          );
        })}
      </div>
    </>
  );
}
