export default function Qwerty({ store }) {
  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm⌫"];
  return (
    <div>
      {qwerty.map((row, index) => (
        <div className="flex justify-center" key={index}>
          {row.split("").map((char) => {
            return (
              <button
                className={`rounded-m m-px flex h-8 w-8 items-center justify-center bg-white`}
                key={char}
                value={char}
                data-cy={`qwerty${char}`}
                onClick={store.handleQwerty}
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
