export default function WordLength() {
  return (
    <>
      <h2 className="text-2xl p-2">Word length?</h2>
      <div className="mb-2 grid grid-cols-4 gap-2">
        {new Array(4).fill(0).map((_, i) => {
          return (
            <div
              className={
                "flex h-12 w-12 items-center justify-center border border-gray-400 font-bold uppercase text-black bg-white"
              }
            >
              {i + 3}
            </div>
          );
        })}
      </div>
    </>
  );
}
