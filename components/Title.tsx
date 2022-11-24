const Title = ({ provChoice, provData, langChoice }) => {
  const titleLang = {
    english: {
      title: "Encyclopedia Canadiana",
      population: "people",
      language: "",
      confederation: "confed.",
      capital: "",
    },
    french: {
      title: "Encyclopédie Canadienne",
      population: "habitants",
      language: "",
      confederation: "conféd.",
      capital: "",
    },
  };
  return (
    <div className="titleContainer">
      <h1>{titleLang?.[langChoice]?.title}</h1>
      <div className="title">
        {provData?.[langChoice]?.map((item) => {
          return (
            <>
              {item[0] === provChoice ? (
                <>
                  <h2 className="flasher">{item[1].province}</h2>
                  <h6 className="subInfo flasher">
                    {item[1].population} {titleLang?.[langChoice].population}
                  </h6>
                  <h6 className="subInfo lang flasher">{item[1].language}</h6>
                  <h6 className="subInfo flasher">
                    {item[1].confederation}{" "}
                    {titleLang?.[langChoice].confederation}
                  </h6>
                  <h6 className="subInfo flasher">{item[1].capital}</h6>
                </>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Title;
