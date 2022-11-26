
const Radios = ({provChoice, factChoice, radioArray, handleFacts}) => {
    return (
         <div
        className={
          provChoice === "default"
            ? "none"
            : "buttonsContainer inline-flex flex-col gap-1 w-[20%]"
        }
      >
        {radioArray.map((rdo) => (
          <>
            <input
              className="hidden"
              type="radio"
              id={rdo[0]}
              value={rdo[0]}
              name="facts"
              onChange={handleFacts}
            />
            <label 
            className={factChoice === rdo[0] 
              ? "cursor-pointer underline-offset-2 whitespace-nowrap"
              : "cursor-pointer whitespace-nowrap"
            } 
            htmlFor={rdo[0]}>
              {rdo[1]}
            </label>
          </>
        ))}
      </div>
    )
}

export default Radios