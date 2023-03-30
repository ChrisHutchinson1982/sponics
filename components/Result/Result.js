export default function Result({ resultMessage }) {
  return (
    <>
      <h2
        className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-6xl font-bold text-transparent"
        data-cy="resultMessage"
      >
        {resultMessage}
      </h2>
    </>
  );
}
