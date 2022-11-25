import { motion } from "framer-motion";
import {Fragment, useState} from 'react'
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
    <div className="mapContainer tester">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        // width="422.184"
        //  height="393.381"
        width="auto"
        height="auto"
        viewBox="-200 -20 700 500"
        strokeLinecap="round"
        initial="hidden"
        animate="visible"
        className="canadaMap"
      >
        <defs>
          <filter
            id="pencilTextureFilter"
            width="100%"
            height="100%"
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
            className={index === clicked ? "cssChange" : "default"}
            id={index}
            key={index}
            variants={pathVariants}
            // whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              handleChoice(item.type.name)
              handleIndex(index)
            }}
          >
            <Fragment key={index}>{item}</Fragment>
          </motion.g>
        ))}

        
          
    
        
          
          
     
          
         
          
          
          
         
        
          
          {/* <motion.path
          whileTap={{ scale: 1.3 }}
            onClick={() => {
              handleChoice("nunavut");
            }}
            className={provChoice === "nunavut" ? "cssChange" : null}
            variants={pathVariants}
            // fill="none"
            stroke="#2D846D"
            d="M181.372 93.12c-.957 2.896-2.272 4.132-.44 3.297m0 0c2.133 1.69.107 2.675 1.92 2.211m0 0c1.646-.411 1.369.458 2.023.629m0 0c-.237 1.656 2.176-1.927 2.145-1.991m0 0c.246-2.689-.123-.13-.493-3.012m0 0c-.362-1.538-1.325-1.354-2.268-2.562m0 0c.688 1.222-3.672-.735-2.887 1.428m0 0s0 0 0 0"
          ></motion.path> */}
          
        
     
          
          
       
          
          
          
          
        
         
          
        
          
        
          
          
 
      </motion.svg>
    </div>
  );
};

export default CanadaMap;
