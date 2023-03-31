export default function Button({ buttonType, i }) {
  return (
    <button
      className={`px-4 h-12 w-${buttonType.width} py-1 mb-4 uppercase text-m text-blue-600 font-bold rounded border border-blue-600 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`}
      data-cy={`${buttonType.name}Button`}
      onClick={buttonType.action}
      key={i}
    >
      {buttonType.name}
    </button>
  );
}
