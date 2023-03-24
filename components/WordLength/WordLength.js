export default function WordLength() {
  return (
    <div className="mb-2 grid grid-cols-4 gap-2">
      {new Array(4).fill(0).map((_, i) => {
        return (
          <div
            className={
              "flex h-16 w-16 items-center justify-center border border-gray-400 font-bold uppercase text-white bg-white"
            }
          ></div>
        );
      })}
    </div>
  );
}
