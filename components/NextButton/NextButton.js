// import { observer } from "mobx-react-lite";

export default function NextButton({ store }) {
  return (
    <>
      <button
        className="px-4 h-12 w-24 py-1 mb-6 uppercase text-m text-blue-600 font-bold rounded border border-blue-600 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        data-cy="nextButton"
        onClick={store.changeSound}
      >
        Next
      </button>
    </>
  );
}
