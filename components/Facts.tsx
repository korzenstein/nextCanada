import { useState } from "react";
import Radios from "./factContainers/Radios";
import Images from "./factContainers/Images";
import { radioData } from "./factContainers/radioData.ts";

const Facts = ({ provChoice, langChoice, provData }) => {
  const [factChoice, setFactChoice] = useState();

  const radioArray = Object.entries(radioData[langChoice]);

  const handleFacts = (e) => {
    setFactChoice(e.target.value);
    
  };

  return (
    <div
      className="factsContainer 
    min-w-[280px] 
    h-72
    flex 
    gap-x-3 
    absolute 
    left-0 
    bottom-0 
    z-20"
    >
      <Radios
        {...{ provChoice, langChoice, provData, radioArray, handleFacts, factChoice }}
      />
     { factChoice !== undefined ?
     <Images
        {...{ provChoice, langChoice, provData, radioArray, factChoice }}
      />
      : null
      }
    </div>
  );
};

export default Facts;
