// import React, { useState,useRef } from "react";
// import image1 from "../utils/Netflix.png"
// import image2 from "../utils/Microsoft.png"
// import image3 from "../utils/Facebook.png"
// import image4 from "../utils/Portfolio.png"
// import {motion, useTransform,useScroll} from "framer-motion"
// import PageTransition from "./PageTransition";


// const Project = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const sm = useTransform(scrollYProgress, [0, 1], [0, -350]);

//   return (
//     <div ref={containerRef} className="h-[1500px] bg-black">
//       <div className=" h-[500px] w-full  flex ">
//         <div className="h-[500px] w-6/12 flex items-center ">
//           <div
            
//             className="h-80 w-8/12  ml-24"
//           >
//             <motion.img src={image4} alt="Image 1" className="h-80 mt-28 " style={{ y: sm }}  />
//           </div>
           
//         </div>  
      

//         <div className=" h-[500px] w-6/12 flex items-center text-white mr-24 text-4xl ">
//            <motion.h1
//            initial={{
//             y:48,opacity:0
//            }}
//            whileInView={{y:0,opacity:1}}
//            transition={{
//             ease:"backInOut",duration:0.75
//            }}
           
//            >
//             An interactive portfolio showcasing my journey as a developer.

//            </motion.h1>

//         </div> 
//       </div>

//       <div className="h-[500px] w-full flex ">
        
//         <div className="h-[500px] w-6/12 flex items-center text-white ml-24 text-4xl">
//            <motion.h1
//            initial={{
//             y:48,opacity:0
//            }}
//            whileInView={{y:0,opacity:1}}
//            transition={{
//             ease:"backInOut",duration:0.75
//            }}
//            >A front-end clone of the Netflix streaming platform, showcasing dynamic content and a sleek user interface.</motion.h1>
//         </div> 

//         <div className="h-[500px] w-6/12 flex items-center ">
//          <div className=" h-80 w-8/12   ml-24 ">
//           <motion.img src={image1} alt="" className="h-80 mt-44" style={{y:sm}} />
//          </div>
           
//         </div> 
//       </div>

//       <div className="h-[500px] w-full  flex  ">
//        <div className="h-[500px] w-6/12 flex items-center">
//          <div className=" h-80 w-8/12 ml-24 ">
//           <motion.img src={image2} alt="" className="h-72 mt-[250px]" style={{y:sm}} />
//          </div>
           
//         </div>  
      

//         <div className="h-[500px] w-6/12 flex items-center text-white mr-24 text-4xl">
//            <motion.h1
//            initial={{
//             y:48,opacity:0
//            }}
//            whileInView={{y:0,opacity:1}}
//            transition={{
//             ease:"backInOut",duration:0.75
//            }}
//            >
//             Landing pages that replicate the design and functionality of Microsoft and Facebook’s official websites.
//            </motion.h1>
//         </div> 
//       </div>
     

      
//     </div>
//   );
// };

// export default Project;

import React, { useRef } from "react";
import image1 from "../utils/Netflix.png";
import image2 from "../utils/Microsoft.png";
import image4 from "../utils/Portfolio.png";
import { motion, useTransform, useScroll } from "framer-motion";

const Project = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -350]);

  return (
    <div ref={containerRef} className="h-[2000px] bg-black flex flex-col">
      <div className="h-[500px] w-full flex flex-col xl:flex-row">
        <div className="h-[500px] w-full xl:w-6/12 flex items-center justify-center">
          <div className="h-64 xl:h-80 w-10/12 xl:w-8/12 mt-8 xl:mt-36 ml-0 xl:ml-24">
            <motion.img
              src={image4}
              alt="Portfolio"
              className="h-64 xl:h-80"
              style={{ y: sm }}
            />
          </div>
        </div>

        <div className="h-[500px] pl-10 mb-80 text-left w-full xl:w-6/12 flex items-center text-white  xl:text-left px-4 xl:mr-24 text-xl xl:text-4xl">
          <motion.h1
            initial={{
              y: 48,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "backInOut",
              duration: 0.75,
            }}
          >
            An interactive portfolio showcasing my journey as a developer.
          </motion.h1>
        </div>
      </div>

      <div className="h-[500px] w-full flex flex-col-reverse xl:flex-row">
        <div className="h-[500px] text-left pl-10 -mt-72 w-full xl:w-6/12 xl:mt-0 flex items-center text-white  xl:text-left px-4 xl:ml-24 text-xl xl:text-4xl">
          <motion.h1
            initial={{
              y: 48,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "backInOut",
              duration: 0.75,
            }}
            
          >
            A front-end clone of the Netflix streaming platform, showcasing
            dynamic content and a sleek user interface.
          </motion.h1>
        </div>

        <div className="h-[500px]  w-full xl:w-6/12 flex items-center justify-center">
          <div className="h-64 xl:h-80 w-10/12 xl:w-8/12 mt-8 xl:mt-0 ml-0 xl:ml-24">
            <motion.img
              src={image1}
              alt="Netflix Clone"
              className="h-64 xl:h-80 mt-0 xl:mt-44"
              style={{ y: sm }}
            />
          </div>
        </div>
      </div>

      <div className="h-[500px] w-full flex flex-col xl:flex-row">
        <div className="h-[500px] w-full xl:w-6/12 flex items-center justify-center">
          <div className="h-64 xl:h-80 w-10/12 xl:w-8/12 mt-8 xl:mt-0 ml-0 xl:ml-24">
            <motion.img
              src={image2}
              alt="Microsoft and Facebook"
              className="h-64 xl:h-72 mt-10 xl:mt-[250px]"
              style={{ y: sm }}
            />
          </div>
        </div>

        <div className="h-[500px] pl-10 -mt-72 w-full xl:w-6/12 flex items-center xl:mt-0 text-white text-left xl:text-left px-4 xl:mr-24 text-xl xl:text-4xl">
          <motion.h1
            initial={{
              y: 48,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "backInOut",
              duration: 0.75,
            }}
          >
            Landing pages that replicate the design and functionality of
            Microsoft and Facebook’s official websites.
          </motion.h1>
        </div>

        
      </div>

      <div className="w-full h-full flex justify-center items-center text-white text-2xl font-medium">
          New Projects Coming Soon 🤠 
        </div>
    </div>
  );
};

export default Project;
