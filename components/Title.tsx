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
    <div className="titleContainer absolute inline-flex flex-col left-0 top-10 w-auto -z-10 gap-2">
      <h1
      className="p-0 m-0 text-3xl"
      >{titleLang?.[langChoice]?.title}</h1>
      <div className="title gap-2 flex flex-col">
        {provData?.[langChoice]?.map((item) => {
          return (
            <>
              {item[0] === provChoice ? (
                <>
                  <h2 className=" w-auto text-2xl my-4">{item[1].province}</h2>
                  <h6 className="subInfo p-0 text-lg">
                    {item[1].population} {titleLang?.[langChoice].population}
                  </h6>
                  <h6 className="subInfo p-0 text-lg max-w-sm">{item[1].language}</h6>
                  <h6 className="subInfo p-0 text-lg">
                    {item[1].confederation}{" "}
                    {titleLang?.[langChoice].confederation}
                  </h6>
                  <h6 className="subInfo p-0 text-lg">{item[1].capital}</h6>
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
