const Languages = ({ languageHandler }) => {
  return (
    <div className="langContainer absolute bottom-10 right-0 z-20 cursor-pointer">
      <p>
        <span className="english" onClick={() => languageHandler("english")}>
          en </span>
        /
        <span
          className="french"
          onClick={() => languageHandler("french")}
        > fr</span>
        </p>
      
    </div>
  );
};
export default Languages;
