import { motion } from "framer-motion";
import { Fragment } from "react";
import Image from "next/image";

const Flags = ({ provChoice, provData, langChoice }) => {
  return (
    <div className="flagsContainer absolute top-12 right-0 pointer-events-none">
      {provData[langChoice].map((item, index) => {
        return (
          <Fragment key={`div${index}`}>
            {item[0] === provChoice ? (
              <div  className="flagImageContainer w-1/3 ml-auto">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 0.9}}
                  >
                    <Image
                      width={1000}
                      height={500}
                      className="
                      flag 
                      rounded-1
                      w-auto
                      h-auto
                      "
                      src={item[1].flag.imageUrl}
                      alt={`flag of ${provChoice}`}
                    />
                  </motion.span>
              </div>
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Flags;
