import Image from "next/image";
import {Fragment} from 'react'
import { motion } from "framer-motion";

const Images = ({ provChoice, langChoice, provData, factChoice }) => {
  return (
    <div className="factsData w-3/4">
      {provData[langChoice].map((item, index) => {
        return (
          <Fragment key={`div${index}`}>
            {item[0] === provChoice ? (
              <div className="dataSet w-full">
                <div className="floraImageContainer relative w-full pointer-events-auto">
                  <h5
                    className="
                    absolute
                    top-44
                    left-11
                    w-full
                    subtitle"
                  >
                    {item[1].facts[factChoice].name}
                  </h5>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9 }}
                  >
                    <Image
                      width={200}
                      height={200}
                      priority={true}
                      className="floraImage 
                      absolute 
                      pointer-events-none
                      -bottom-40
                      -right-8
                      rounded-2xl
                      w-full
                      h-auto
                      "
                      src={item[1].facts[factChoice].imageUrl}
                      alt={item[1].facts[factChoice].name}
                    />
                  </motion.span>
                </div>
              </div>
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Images;
