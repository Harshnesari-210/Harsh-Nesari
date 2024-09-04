// // // // import React, { useEffect } from "react";
// // // // import Typed from "typed.js";
// // // // import PageTransition from "./PageTransition";
// // // // import {motion} from "framer-motion"
// // // // import Project from "./Project";
// // // // // import bgvideo from "url:../utils/bgvideo.mp4";

// // // // const Hero = () => {
// // // //   useEffect(() => {
// // // //     const options = {
// // // //       strings: ["developer", "designer"],
// // // //       typeSpeed: 100,
// // // //       backSpeed: 100,
// // // //       backDelay: 1000,
// // // //       startDelay: 500,
// // // //       loop: true,
// // // //       cursorChar: "",
// // // //       smartBackspace: false,
// // // //     };

// // // //     const typed = new Typed(".type", options);

// // // //     return () => {
// // // //       typed.destroy();
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div className="  xl:Hero text-white flex bg-black flex-col  ">
// // // //      {/* <video src={bgvideo} autoPlay muted loop className="w-full h-full object-cover z-0"> */}

// // // //       <div className="xl:w-7/12 h-[86vh] flex items-center justify-center z-10">
// // // //         <motion.div className="text h-[80%] w-[80%]"
// // // //         initial={{
// // // //           x:-100,opacity:0
// // // //          }}
// // // //          whileInView={{x:0,opacity:1}}
// // // //          transition={{
// // // //           ease:"easeInOut",duration:0.75
// // // //          }}
// // // //         >
// // // //           <h3 className="xl:py-8 pl-1 text-sm py-8">Hello There!</h3>
// // // //           <h1 className="  xl:text-7xl  pb-3  ">I'm <span className="name">Harsh Nesari</span>,</h1>
// // // //           <h1 className="xl:text-7xl font-semibold py-3 text-4xl">a creative Frontend</h1>
// // // //           <h1 className="xl:text-7xl font-semibold py-3 type text-4xl"></h1>
// // // //         </motion.div>
// // // //       </div>
// // // //       <div className="xl:flex items-center justify-center">
// // // //         {/* Placeholder for image or 3D model */}
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default Hero;

// // // import React, { useEffect } from "react";
// // // import Typed from "typed.js";
// // // import PageTransition from "./PageTransition";
// // // import { motion } from "framer-motion";
// // // import image1 from "../utils/html.png";
// // // import image2 from "../utils/css.png";
// // // import image3 from "../utils/js.png";
// // // import image4 from "../utils/tailwind.png";
// // // import image5 from "../utils/react.png";
// // // import image6 from "../utils/framer-motion.png";
// // // import location from "../utils/location.png";
// // // // import bgvideo from "url:../utils/bgvideo.mp4";

// // // const Hero = () => {
// // //   useEffect(() => {
// // //     const options = {
// // //       strings: ["developer", "designer"],
// // //       typeSpeed: 100,
// // //       backSpeed: 100,
// // //       backDelay: 1000,
// // //       startDelay: 500,
// // //       loop: true,
// // //       cursorChar: "",
// // //       smartBackspace: false,
// // //     };

// // //     const typed = new Typed(".type", options);

// // //     return () => {
// // //       typed.destroy();
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="relative xl:Hero text-white flex  bg-black flex-row w-[100vw]">
// // //       {/* Background Video */}
// // //       {/* <img
// // //         src={image}
// // //         className="absolute top-0 left-0 w-full h-full object-cover"
// // //       /> */}

// // //       {/* Content Overlay */}
// // //       <div className="relative z-10 xl:w-7/12 w-10/12 h-[86vh] flex items-center justify-center ">
// // //         <motion.div
// // //           className="text h-[80%] xl:w-[80%] w-[50%]"
// // //           initial={{ x: -100, opacity: 0 }}
// // //           whileInView={{ x: 0, opacity: 1 }}
// // //           transition={{
// // //             ease: "easeInOut",
// // //             duration: 0.75,
// // //           }}
// // //         >
// // //           <h3 className="xl:py-8 pl-1 text-sm py-8">Hello There!</h3>
// // //           <h1 className="xl:text-7xl pb-3 text-4xl">
// // //             I'm <span className="name">Harsh Nesari</span>,
// // //           </h1>
// // //           <h1 className="xl:text-7xl font-semibold py-3 text-4xl">
// // //             a creative Frontend
// // //           </h1>
// // //           <h1 className="xl:text-7xl font-semibold py-3 type text-4xl"></h1>
// // //         </motion.div>
// // //       </div>

// // //       <div className="relative z-20 xl: w-5/12 flex   flex-col ">
// // //         <div className="h-36 w-[315px] border-l border-t border-b border-solid border-white rounded-l-full ml-[50.5%] mt-36 xl:flex items-center justify-center hidden">
// // //           <div className="h-[85px] w-[85px]  mr-5 flex items-center justify-center">
// // //             <img src={location} alt="" className="h-[50px] " />
// // //           </div>
// // //           <div className="ml-4 text-2xl font-bold">
// // //             <div className="mb-2">Located in the</div>
// // //             <div>India</div>
// // //           </div>
// // //         </div>

// // //         <div className="xl:mt-[100px] xl:font-semibold xl:text-5xl ">
// // //           Tech Stack
// // //         </div>

// // //         <div className="mt-28 xl:h-[40%] xl:w-[80%] xl:mt-4 flex flex-col items-center justify-center ">
// // //           <div className=" flex flex-row xl:space-x-10 space-x-2 -ml-48 xl:mt-5 ">
// // //             <motion.img
// // //               src={image1}
// // //               alt="HTML"
// // //               className="max-w-none xl:h-16 xl:w-16 h-12 w-12"
// // //               whileHover={{
// // //                 scale: 1.3,
// // //               }}
// // //             />
// // //             <motion.img
// // //               src={image2}
// // //               alt="CSS"
// // //               className="max-w-none xl:h-16 xl:w-16 h-12 w-12"
// // //               whileHover={{
// // //                 scale: 1.3,
// // //               }}
// // //             />
// // //             <motion.img
// // //               src={image3}
// // //               alt="JavaScript"
// // //               className="max-w-none xl:h-16 xl:w-16 h-12 w-12"
// // //               whileHover={{
// // //                 scale: 1.3,
// // //               }}
// // //             />
// // //             <motion.img
// // //               src={image4}
// // //               alt="Tailwind"
// // //               className="max-w-none xl:h-16 xl:w-16 h-12 w-12"
// // //               whileHover={{
// // //                 scale: 1.3,
// // //               }}
// // //             />
// // //             <motion.img
// // //               src={image5}
// // //               alt="React"
// // //               className="max-w-none xl:h-16 xl:w-16 h-12 w-12"
// // //               whileHover={{
// // //                 scale: 1.3,
// // //               }}
// // //             />
// // //             <motion.img
// // //               src={image6}
// // //               alt="React"
// // //               className="max-w-none xl:h-16 xl:w-16 h-12 w-12"
// // //               whileHover={{
// // //                 scale: 1.3,
// // //               }}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;


// // // import React, { useEffect } from "react";
// // // import Typed from "typed.js";
// // // import { motion } from "framer-motion";
// // // import image1 from "../utils/html.png";
// // // import image2 from "../utils/css.png";
// // // import image3 from "../utils/js.png";
// // // import image4 from "../utils/tailwind.png";
// // // import image5 from "../utils/react.png";
// // // import image6 from "../utils/framer-motion.png";
// // // import location from "../utils/location.png";

// // // const Hero = () => {
// // //   useEffect(() => {
// // //     const options = {
// // //       strings: ["developer", "designer"],
// // //       typeSpeed: 100,
// // //       backSpeed: 100,
// // //       backDelay: 1000,
// // //       startDelay: 500,
// // //       loop: true,
// // //       cursorChar: "",
// // //       smartBackspace: false,
// // //     };

// // //     const typed = new Typed(".type", options);

// // //     return () => {
// // //       typed.destroy();
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="relative text-white flex flex-col xl:flex-row w-full bg-black">
// // //       {/* Content Section */}
// // //       <div className="relative z-10 w-full xl:w-7/12 h-[60vh] xl:h-[86vh] flex items-center justify-center">
// // //         <motion.div
// // //           className="text w-full xl:w-[80%] relative overflow-hidden"
// // //           initial={{ x: -100, opacity: 0 }}
// // //           whileInView={{ x: 0, opacity: 1 }}
// // //           transition={{
// // //             ease: "easeInOut",
// // //             duration: 0.75,
// // //           }}
// // //         >
// // //           <h3 className="py-4 xl:py-8 text-sm">Hello There!</h3>
// // //           <h1 className="text-3xl md:text-4xl xl:text-7xl pb-2 xl:pb-3">
// // //             I'm <span className="name">Harsh Nesari</span>,
// // //           </h1>
// // //           <h1 className="text-3xl md:text-4xl xl:text-7xl font-semibold py-2 xl:py-3">
// // //             a creative Frontend
// // //           </h1>
// // //           <div className="relative h-[50px]">
// // //             <h1 className="text-3xl md:text-4xl xl:text-7xl font-semibold py-2 xl:py-3 type"></h1>
// // //           </div>
// // //         </motion.div>
// // //       </div>

// // //       {/* Tech Stack Section */}
// // //       <div className="relative z-20 w-full xl:w-5/12 flex flex-col items-center xl:items-end p-4">
// // //         <div className="hidden xl:flex items-center justify-center mt-12 xl:mt-36 w-[315px] border-l border-t border-b border-white rounded-l-full">
// // //           <div className="h-[85px] w-[85px] mr-5 flex items-center justify-center">
// // //             <img src={location} alt="Location" className="h-[50px]" />
// // //           </div>
// // //           <div className="ml-4 text-2xl font-bold">
// // //             <div className="mb-2">Located in the</div>
// // //             <div>India</div>
// // //           </div>
// // //         </div>

// // //         <div className="text-center xl:text-right xl:mt-12 mt- font-semibold text-2xl xl:text-5xl">
// // //           Tech Stack
// // //         </div>

// // //         <div className="mt-6 xl:mt-4 flex flex-wrap justify-center xl:justify-start">
// // //           <motion.img
// // //             src={image1}
// // //             alt="HTML"
// // //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// // //             whileHover={{ scale: 1.3 }}
// // //           />
// // //           <motion.img
// // //             src={image2}
// // //             alt="CSS"
// // //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// // //             whileHover={{ scale: 1.3 }}
// // //           />
// // //           <motion.img
// // //             src={image3}
// // //             alt="JavaScript"
// // //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// // //             whileHover={{ scale: 1.3 }}
// // //           />
// // //           <motion.img
// // //             src={image4}
// // //             alt="Tailwind"
// // //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// // //             whileHover={{ scale: 1.3 }}
// // //           />
// // //           <motion.img
// // //             src={image5}
// // //             alt="React"
// // //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// // //             whileHover={{ scale: 1.3 }}
// // //           />
// // //           <motion.img
// // //             src={image6}
// // //             alt="Framer Motion"
// // //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// // //             whileHover={{ scale: 1.3 }}
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;

// // import React, { useEffect } from "react";
// // import Typed from "typed.js";
// // import { motion } from "framer-motion";
// // import image1 from "../utils/html.png";
// // import image2 from "../utils/css.png";
// // import image3 from "../utils/js.png";
// // import image4 from "../utils/tailwind.png";
// // import image5 from "../utils/react.png";
// // import image6 from "../utils/framer-motion.png";
// // import location from "../utils/location.png";

// // const Hero = () => {
// //   useEffect(() => {
// //     const options = {
// //       strings: ["developer", "designer"],
// //       typeSpeed: 100,
// //       backSpeed: 100,
// //       backDelay: 1000,
// //       startDelay: 500,
// //       loop: true,
// //       cursorChar: "",
// //       smartBackspace: false,
// //     };

// //     const typed = new Typed(".type", options);

// //     return () => {
// //       typed.destroy();
// //     };
// //   }, []);

// //   return (
// //     <div className="relative text-white flex flex-col xl:flex-row w-full bg-black">
// //       {/* Content Section */}
// //       <div className="relative z-10 w-full xl:w-7/12 h-[60vh] xl:h-[86vh] flex items-center justify-center">
// //         <motion.div
// //           className="text w-full xl:w-[80%] relative overflow-visible" 
// //           initial={{ x: -100, opacity: 0 }}
// //           whileInView={{ x: 0, opacity: 1 }}
// //           transition={{
// //             ease: "easeInOut",
// //             duration: 0.75,
// //           }}
// //         >
// //           <h3 className="py-4 xl:py-8 text-sm">Hello There!</h3>
// //           <h1 className="text-3xl md:text-4xl xl:text-7xl pb-2 xl:pb-3">
// //             I'm <span className="name">Harsh Nesari</span>,
// //           </h1>
// //           <h1 className="text-3xl md:text-4xl xl:text-7xl font-semibold py-2 xl:py-3">
// //             a creative Frontend
// //           </h1>
// //           <div className="relative overflow-visible"> {/* Adjusted overflow */}
// //             <h1 className="text-3xl md:text-4xl xl:text-7xl font-semibold py-2 xl:py-3 type"></h1>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* Tech Stack Section */}
// //       <div className="relative z-20 w-full xl:w-5/12 flex flex-col items-center xl:items-end p-4">
// //         <div className="hidden xl:flex items-center justify-center mt-12 xl:mt-36 w-[315px] border-l border-t border-b border-white rounded-l-full">
// //           <div className="h-[85px] w-[85px] mr-5 flex items-center justify-center">
// //             <img src={location} alt="Location" className="h-[50px]" />
// //           </div>
// //           <div className="ml-4 text-2xl font-bold">
// //             <div className="mb-2">Located in the</div>
// //             <div>India</div>
// //           </div>
// //         </div>

// //         <div className="text-center xl:text-right xl:mt-12 -mt-5 font-semibold text-2xl xl:text-5xl">
// //           Tech Stack
// //         </div>

// //         <div className="mt-6 xl:mt-4 flex flex-wrap justify-center xl:justify-start">
// //           <motion.img
// //             src={image1}
// //             alt="HTML"
// //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// //             whileHover={{ scale: 1.3 }}
// //           />
// //           <motion.img
// //             src={image2}
// //             alt="CSS"
// //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// //             whileHover={{ scale: 1.3 }}
// //           />
// //           <motion.img
// //             src={image3}
// //             alt="JavaScript"
// //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// //             whileHover={{ scale: 1.3 }}
// //           />
// //           <motion.img
// //             src={image4}
// //             alt="Tailwind"
// //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// //             whileHover={{ scale: 1.3 }}
// //           />
// //           <motion.img
// //             src={image5}
// //             alt="React"
// //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// //             whileHover={{ scale: 1.3 }}
// //           />
// //           <motion.img
// //             src={image6}
// //             alt="Framer Motion"
// //             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
// //             whileHover={{ scale: 1.3 }}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// import React, { useEffect } from "react";
// import Typed from "typed.js";
// import { motion } from "framer-motion";
// import image1 from "../utils/html.png";
// import image2 from "../utils/css.png";
// import image3 from "../utils/js.png";
// import image4 from "../utils/tailwind.png";
// import image5 from "../utils/react.png";
// import image6 from "../utils/framer-motion.png";
// import location from "../utils/location.png";

// const Hero = () => {
//   useEffect(() => {
//     const options = {
//       strings: ["developer", "designer"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       backDelay: 1000,
//       startDelay: 500,
//       loop: true,
//       cursorChar: "",
//       smartBackspace: false,
//     };

//     const typed = new Typed(".type", options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div className="relative text-white flex flex-col xl:flex-row w-full bg-black">
//       {/* Content Section */}
//       <div className="relative z-10 w-full xl:w-7/12 h-[60vh] xl:h-[86vh] flex items-center justify-center">
//         <motion.div
//           className="text w-full xl:w-[80%] relative overflow-visible" 
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{
//             ease: "easeInOut",
//             duration: 0.75,
//           }}
//         >
//           <h3 className="py-4 xl:py-8 text-sm">Hello There!</h3>
//           <h1 className="text-3xl md:text-4xl xl:text-7xl pb-2 xl:pb-3">
//             I'm <span className="name">Harsh Nesari</span>,
//           </h1>
//           <h1 className="text-3xl md:text-4xl xl:text-7xl font-semibold py-2 xl:py-3">
//             a creative Frontend
//           </h1>
//           <div className="relative overflow-visible"> 
//             <h1 className="text-3xl md:text-4xl xl:text-7xl font-semibold py-2 xl:py-3 type"></h1>
//           </div>
//         </motion.div>
//       </div>

//       <div className="relative z-20 w-full xl:w-5/12 flex flex-col items-center xl:items-end p-4">
//         <div className="hidden xl:flex items-center justify-center mt-12 xl:mt-36 w-[315px] border-l border-t border-b border-white rounded-l-full">
//           <div className="h-[85px] w-[85px] mr-5 flex items-center justify-center">
//             <img src={location} alt="Location" className="h-[50px]" />
//           </div>
//           <div className="ml-4 text-2xl font-bold">
//             <div className="mb-2">Located in the</div>
//             <div>India</div>
//           </div>
//         </div>

//         <div className="text-center xl:text-right xl:mt-12 -mt-5 font-semibold text-2xl xl:text-5xl">
//           Tech Stack
//         </div>

//         <div className="mt-6 xl:mt-4 flex flex-wrap justify-center xl:justify-start">
//           <motion.img
//             src={image1}
//             alt="HTML"
//             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
//             whileHover={{ scale: 1.3 }}
//           />
//           <motion.img
//             src={image2}
//             alt="CSS"
//             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
//             whileHover={{ scale: 1.3 }}
//           />
//           <motion.img
//             src={image3}
//             alt="JavaScript"
//             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
//             whileHover={{ scale: 1.3 }}
//           />
//           <motion.img
//             src={image4}
//             alt="Tailwind"
//             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
//             whileHover={{ scale: 1.3 }}
//           />
//           <motion.img
//             src={image5}
//             alt="React"
//             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
//             whileHover={{ scale: 1.3 }}
//           />
//           <motion.img
//             src={image6}
//             alt="Framer Motion"
//             className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
//             whileHover={{ scale: 1.3 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import image1 from "../utils/html.png";
import image2 from "../utils/css.png";
import image3 from "../utils/js.png";
import image4 from "../utils/tailwind.png";
import image5 from "../utils/react.png";
import image6 from "../utils/framer-motion.png";
import location from "../utils/location.png";

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["developer", "designer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      cursorChar: "",
      smartBackspace: false,
    };

    const typed = new Typed(".type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative text-white flex flex-col xl:flex-row w-full bg-black">
      {/* Content Section */}
      <div className="relative z-10 w-full xl:w-7/12 h-[50vh] xl:h-[86vh] flex  justify-center pt-20 xl:pt-20 ">
        <motion.div
          className="text w-full xl:w-[80%] relative overflow-visible" 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.75,
          }}
        >
          <h3 className="py-10 xl:py-8 text-sm p-2">Hello There!</h3>
          <h1 className=" md:text-4xl xl:text-7xl  xl:pb-3 text-4xl xl:p-0 p-2 ">
            I'm <span className="name">Harsh Nesari</span>,
          </h1>
          <h1 className="text-4xl xl:text-7xl font-semibold p-2 xl:py-3 xl:-ml-2 xl:my-0 my-5">
            a creative Frontend
          </h1>
          <div className="relative h-[70px]"> 
            <h1 className=" md:text-4xl xl:text-7xl font-semibold py-2 xl:py-3 type p-2 text-4xl xl:-ml-2"></h1>
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 w-full xl:w-5/12 flex flex-col items-center xl:items-end p-4 h-[36vh] mt-16 xl:mt-0">
        <div className="hidden xl:flex items-center justify-center mt-12 xl:mt-36 w-[315px] border-l border-t border-b border-white rounded-l-full">
          <div className="h-[85px] w-[85px] mr-5 flex items-center justify-center">
            <img src={location} alt="Location" className="h-[50px]" />
          </div>
          <div className="ml-4 text-2xl font-bold">
            <div className="mb-2">Located in the</div>
            <div>India</div>
          </div>
        </div>

        <div className="text-center xl:text-right xl:mt-12 -mt-5 font-semibold text-2xl xl:text-5xl">
          Tech Stack
        </div>

        <div className="mt-6 xl:mt-4 flex flex-wrap justify-center xl:justify-start">
          <motion.img
            src={image1}
            alt="HTML"
            className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
            whileHover={{ scale: 1.3 }}
          />
          <motion.img
            src={image2}
            alt="CSS"
            className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
            whileHover={{ scale: 1.3 }}
          />
          <motion.img
            src={image3}
            alt="JavaScript"
            className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
            whileHover={{ scale: 1.3 }}
          />
          <motion.img
            src={image4}
            alt="Tailwind"
            className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
            whileHover={{ scale: 1.3 }}
          />
          <motion.img
            src={image5}
            alt="React"
            className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
            whileHover={{ scale: 1.3 }}
          />
          <motion.img
            src={image6}
            alt="Framer Motion"
            className="h-12 w-12 xl:h-16 xl:w-16 mx-2 xl:mx-4 my-2"
            whileHover={{ scale: 1.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
