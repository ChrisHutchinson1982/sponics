import Button from "../Button/Button";

export default function ControlButtons({ store }) {
  return (
    <>
      <div className="mb-2 grid grid-cols-2 gap-8 mt-2">
        {[
          { name: "clear", action: store.init, width: 36 },
          { name: "submit", action: store.submitGuess, width: 36 },
        ].map((buttonType, i) => {
          return <Button buttonType={buttonType} key={i} />;
        })}
      </div>
    </>
  );
}
