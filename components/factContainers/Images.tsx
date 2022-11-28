import Image from "next/image";
import { motion } from "framer-motion";
// import { FunctionComponent } from "react";


// interface Props {
//   provChoice?: string;
//   langChoice: string;
//   provData: any;
//   factChoice: string;
// }

const Images = ({
  provChoice,
  langChoice,
  provData,
  factChoice,
}) => {
  return (
    <div className="factsData w-3/4">
      {provData[langChoice].map((item, index) => {
        return (
          <>
            {item[0] === provChoice ? (
              <div key={index} className="dataSet w-full">
                <div className="floraImageContainer relative w-full pointer-events-auto">
                  <h5
                    className="
                    absolute
                    top-44
                    left-11
                    w-full
                    subtitle"
                  >
                    {item[1].facts[factChoice]?.name}
                  </h5>
                    <motion.span
          
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{duration: 0.9}}
                    >
                      <Image
                        key={item[1].facts[factChoice]?.name}
                        width={200}
                        height={200}
                        className="floraImage 
                      absolute 
                      pointer-events-none
                      -bottom-40
                      -right-8
                      rounded-2xl
                      "
                        src={item[1].facts[factChoice]?.imageUrl}
                        alt={item[1].facts[factChoice]?.name || `unique picure`}
                      />
                    </motion.span>
                </div>
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Images;
