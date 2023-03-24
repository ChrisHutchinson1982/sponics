export default function Guess() {
  return (
    <>
      <div className="mb-2 grid grid-cols-4 gap-2">
        {new Array(4).fill(0).map((_, i) => {
          return (
            <div
              className={`flex h-16 w-16 items-center justify-center rounded border border-blue-600 font-bold uppercase text-gray-800 bg-white`}
            ></div>
          );
        })}
      </div>
    </>
  );
}
