export default function Qwerty() {
  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return (
    <div>
      {qwerty.map((row) => (
        <div className="flex justify-center">
          {row.split("").map((char) => {
            return (
              <button
                className={`rounded-m m-px flex h-8 w-8 items-center justify-center bg-white`}
              >
                {char}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
