import { motion } from "framer-motion";
import Image from "next/image";

const Flags = ({ provChoice, provData, flagHandler, langChoice }) => {
  return (
    <div className="flagsContainer">
      {provData?.[langChoice]?.map((item, index) => {
        return (
          <>
            {item[0] === provChoice ? (
              <div key={index} className="flagImageContainer flasher">
                <Image
                  width={100}
                  height={100}
                  className="flag"
                  onClick={() => {
                    flagHandler();
                  }}
                  src={item[1].flag.imageUrl}
                  alt={`flag of ${provChoice}`}
                />
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Flags;
