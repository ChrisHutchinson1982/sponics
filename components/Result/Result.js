export default function Result({ resultMessage }) {
  const textColor =
    resultMessage === "Correct, well done!"
      ? "text-green-600"
      : resultMessage === "Not a word, try again..."
      ? "text-red-600"
      : "text-blue-600";

  return (
    <>
      <h2 className={`${textColor} text-2xl font-bold`} data-cy="resultMessage">
        {resultMessage}
      </h2>
    </>
  );
}
