import Button from "../Button/Button";

export default function ControlButtons({ store }) {
  return (
    <>
      <div className="mb-2 grid grid-cols-2 gap-8 mt-8">
        {[
          ["reset", store.init, 36],
          ["submit", store.submitGuess, 36],
        ].map((buttonType, i) => {
          return <Button buttonType={buttonType} i={i} />;
        })}
      </div>
    </>
  );
}
