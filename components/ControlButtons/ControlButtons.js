export default function ControlButtons({ store }) {
  return (
    <>
      <div className="mb-2 grid grid-cols-2 gap-8">
        {[
          ["reset", store.init],
          ["submit", store.submitGuess],
        ].map((buttonType, i) => {
          return (
            <button
              className="px-4 h-12 w-36 py-1 mt-6 uppercase text-m text-blue-600 font-bold rounded border border-blue-600 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              data-cy={`${buttonType[0]}Button`}
              onClick={buttonType[1]}
              key={i}
            >
              {buttonType[0]}
            </button>
          );
        })}
      </div>
    </>
  );
}
