import { useState } from "react";
import Image from 'next/image'


const Facts = ({ provChoice, langChoice, provData }) => {
  const [factChoice, setFactChoice] = useState([]);
  const radios = {
    english: {
      flora: "Flora",
      fauna: "Fauna",
      park: "National Park",
      trivia: "Trivia",
    },
    french: {
      flora: "Flore",
      fauna: "Faune",
      park: "Parc National",
      trivia: "Futilités",
    },
  };

  const handleFacts = (e) => {
    setFactChoice(e.target.value);
  };

  return (
    
    <div className="factsContainer">
      <div
        className={
          provChoice === "default" ? "none" : "buttonsContainer flasher"
        }
      >
        <input
          type="radio"
          id="flora"
          value="flora"
          name="facts"
          onChange={handleFacts}
        />
        <label className="labels" htmlFor="flora">
          {radios?.[langChoice].flora}
        </label>

        <input
          type="radio"
          id="fauna"
          value="fauna"
          name="facts"
          onChange={handleFacts}
        />
        <label className="labels" htmlFor="fauna">
          {radios[langChoice].fauna}
        </label>
        <input
          type="radio"
          id="park"
          value="park"
          name="facts"
          onChange={handleFacts}
        />
        <label className="labels" htmlFor="park">
          {radios[langChoice].park}
        </label>
      </div>
      <div className="factsData">
        {provData[langChoice].map((item) => {
          return (
            <>
              {item[0] === provChoice ? (
                <div key={item} className="dataSet">
                  <div className="floraImageContainer">
                    <h5 className="subtitle flasher">
                      {item[1].facts[factChoice]?.name}
                    </h5>
                    <Image
                      width={100}
                      height={100}
                      className="floraImage"
                      src={item[1].facts[factChoice]?.imageUrl}
                      alt={item[1].facts[factChoice]?.name}
                    />
                  </div>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Facts;
