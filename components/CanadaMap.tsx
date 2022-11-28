import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import provComponents from "./provinces/provComponents";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "none",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    // fill: "#edb62a",
    // transition: {
    //   ease: "easeInOut",
    //   opacity: {
    //     duration: 1,
    //   },
    //   pathLength: {
    //     duration: 1,
    //   },
    //   fill: {
    //     duration: 0.2,
    //   },
    // },
  },
};

const CanadaMap = ({ handleChoice, provChoice }) => {
  const [clicked, setClicked] = useState();

  const handleIndex = (index) => {
    setClicked(index);
  };
  return (
    <div className="mapContainer h-full">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        // width="422.184"
        //  height="393.381"
        // width="auto"
        // height="auto"
        viewBox="-200 -20 700 500"
        strokeLinecap="round"
        initial="hidden"
        animate="visible"
        className="canadaMap absolute"
      >
        <defs>
          <filter
            id="pencilTextureFilter"
            // width="100%"
            // height="100%"
            x="0%"
            y="0%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              baseFrequency="2"
              numOctaves="5"
              result="f1"
              stitchTiles="stitch"
              type="fractalNoise"
            ></feTurbulence>
            <feColorMatrix
              result="f2"
              values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="f2"
              operator="in"
              result="f3"
            ></feComposite>
          </filter>
        </defs>

        {provComponents.map((item, index) => (
          <motion.g
            filter="url(#pencilTextureFilter)"
            className={
              index === clicked
                ? "fill-red-300 stroke-black stroke-1 cursor-pointer"
                : "fill-slate-200 stroke-black stroke-1 cursor-pointer"
            }
            id={index}
            key={index}
            variants={pathVariants}
            // whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              handleChoice(item.key);
              console.log("here", item.key)
              console.log(item.type.name)
              handleIndex(index);
            }}
          >
            <Fragment key={index}>{item}</Fragment>
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
};

export default CanadaMap;
