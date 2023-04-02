export default function Sound({ sound }) {
  return (
    <>
      <div
        className={`flex h-24 w-24 m-2 items-center justify-center rounded-m border border-blue-600 font-bold text-5xl lowercase text-gray-800 bg-white`}
        data-cy="sound"
      >
        {sound}
      </div>
    </>
  );
}
