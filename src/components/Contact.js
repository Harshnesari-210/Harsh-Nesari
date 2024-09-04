// // // import React from "react";
// // // import image from "../utils/image.png";

// // // const Contact = () => {
// // //     return (
// // //         <div className="h-[200vh] flex">
// // //             <div className="w-8/12 h-[100%] text-white border-solid bg-black">
// // //                 <div className="flex flex-col pl-52 pt-[100px]">
// // //                     <span className="block font-normal text-8xl mb-3 tracking-normal">
// // //                         Let's start a
// // //                     </span>
// // //                     <span className="font-normal text-8xl">
// // //                         project together
// // //                     </span>
// // //                 </div>
// // //                 <div className="flex flex-col pl-52 pt-[150px]">
// // //                     <div className="border-t h-44 w-[700px]">
// // //                         <h5 className="inline-block py-5 pr-10 text-lg pt-11">01</h5>
// // //                         <label htmlFor="name" className="text-3xl">What's your Name</label>
// // //                         <input type="text" name="name" id="" className="block ml-16 bg-black border-black rounded-lg py-5 px-6 focus:outline-none" placeholder="Harry Jones" />
// // //                     </div>

// // //                     <div className="border-t border-white border-solid h-44 w-[700px]">
// // //                         <h5 className="inline-block py-5 pr-10 text-lg pt-11">01</h5>
// // //                         <label htmlFor="name" className="text-3xl">What's your email?</label>
// // //                         <input type="text" name="name" id="" className="block ml-16 bg-black border-black rounded-lg py-5 px-6 focus:outline-none" placeholder="Harry@gmail.com" />
// // //                     </div>

// // //                     <div className="border-t border-white border-solid h-44 w-[700px]">
// // //                         <h5 className="inline-block py-5 pr-10 text-lg pt-11">01</h5>
// // //                         <label htmlFor="name" className="text-3xl">What services are you looking for?</label>
// // //                         <input type="text" name="name" id="" className="block ml-16 bg-black border-white rounded-lg py-5 px-6 focus:outline-none w-full" placeholder="Web Design, Web Development..." />
// // //                     </div>

// // //                     <div className="border-t border-white border-solid h-44 w-[700px]">
// // //                         <h5 className="inline-block py-5 pr-10 text-lg pt-11">01</h5>
// // //                         <label htmlFor="name" className="text-3xl">Your message</label>
// // //                         <input type="text" name="name" id="" className="block ml-16 bg-black border-black rounded-lg py-5 px-6 focus:outline-none w-full" placeholder="Hello Harsh can you help me with..." />
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //             <div className="w-4/12 bg-black h-[100%]">
// // //                 <img src={image} alt="" className="h-24 w-24 rounded-[50%] mt-[210px] border border-white border-dotted" />
// // //                <div>
// // //                    <svg width="20px" height="20px" className="mt-10" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
// // //                     <title>arrow-down-right</title>
// // //                     <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
// // //                         <g stroke="#FFFFFF" strokeWidth="1.5">
// // //                             <polyline points="2 12 12 12 12 2"></polyline>
// // //                             <line x1="12" y1="12" x2="0" y2="0"></line>
// // //                         </g>
// // //                     </g>
// // //                 </svg>
// // //                </div>

// // //                 <div className="mt-[78px] text-white text-xs font-normal ">
// // //                     CONTACT DETAILS
// // //                 </div>

// // //                  <span className="btn-text text-white" style="transform: rotate(0.001deg);">
// // //                         <span className="btn-text-inner">info@dennissnellenberg.com</span>
// // //                      </span>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Contact;
// // import React from "react";
// // import image1 from "../utils/logo.png";
// // import image2 from "../utils/instagram-logo.png"
// // import image3 from "../utils/linkedin.png"
// // import image4 from "../utils/github.png"
// // import image5 from "../utils/twitter.png"
// // import { useState } from "react";

// // const Contact = () => {

// //   const handleClick = () => {
// //     const [text,settext]=useState("");

// //     const handleClick=()=>{
// //       settext("Thank You")
// //     }

// //     const handleInput=()=>{
// //       settext(" ")
// //     }

// //   }

// //   return (
// //     <div className="h-[200vh] flex">
// //       <div className="w-8/12 h-[100%] text-white border-solid bg-black">
// //         <div className="flex flex-col pl-52 pt-[100px]">
// //           <span className="block font-normal text-8xl mb-3 tracking-normal">
// //             Let's start a
// //           </span>
// //           <span className="font-normal text-8xl">project together</span>
// //         </div>
// //         <div className="flex flex-col pl-52 pt-[150px]">
// //           <div className="border-t border-[grey] h-44 w-[700px]">
// //             <h5 className="inline-block py-5 pr-10 text-lg pt-11">01</h5>
// //             <label htmlFor="name" className="text-3xl">
// //               What's your Name
// //             </label>
// //             <input
// //               type="text"
// //               name="name"
// //               id=""
// //               className="block ml-16 bg-black border-black rounded-lg py-5 px-6 focus:outline-none"
// //               placeholder="Harry Jones"
// //               onChange={handleInput}
// //             />
// //           </div>

// //           <div className="border-t border-[grey]  border-solid h-44 w-[700px]">
// //             <h5 className="inline-block py-5 pr-10 text-lg pt-11">01</h5>
// //             <label htmlFor="name" className="text-3xl">
// //               What's your email?
// //             </label>
// //             <input
// //               type="text"
// //               name="name"
// //               id=""
// //               className="block ml-16 bg-black border-black rounded-lg py-5 px-6 focus:outline-none"
// //               placeholder="Harry@gmail.com"
// //               onChange={handleInput}
// //             />
// //           </div>

// //           <div className="border-t border-[grey]  border-solid h-44 w-[700px]">
// //             <h5 className="inline-block py-5 pr-10 text-lg pt-11">01</h5>
// //             <label htmlFor="name" className="text-3xl">
// //               What services are you looking for?
// //             </label>
// //             <input
// //               type="text"
// //               name="name"
// //               id=""
// //               className="block ml-16 bg-black border-white rounded-lg py-5 px-6 focus:outline-none w-full"
// //               placeholder="Web Design, Web Development..."
// //               onChange={handleInput}
// //             />
// //           </div>

// //           <div className="border-t border-[grey]  border-solid h-44 w-[700px]">
// //             <h5 className="inline-block py-5 pr-10 text-lg pt-11">01</h5>
// //             <label htmlFor="name" className="text-3xl">
// //               Your message
// //             </label>
// //             <input
// //               type="text"
// //               name="name"
// //               id=""
// //               className="block ml-16 bg-black border-black rounded-lg py-5 px-6 focus:outline-none w-full"
// //               placeholder="Hello Harsh can you help me with..."
// //               onChange= {handleInput}
// //             />
// //           </div>

// //           <div className="flex">
// //           <div className="send mt-24 ">
// //             <button className="border border-white border-solid py-5 px-8 rounded-3xl" onClick= {handleClick}>Send it</button>
// //           </div>

// //           <div className="text-div mt-28 ml-10">

// //           </div>
// //           </div>

// //         </div>
// //       </div>
// //       <div className="w-4/12 bg-black h-[100%]">
// //         <img
// //           src={image1}
// //           alt=""
// //           className="h-24 w-24 rounded-[50%] mt-[210px] border border-white border-dotted"
// //         />
// //         <div className="flex justify-start ml-3 mt-8">
// //           <svg
// //             width="20px"
// //             height="20px"
// //             viewBox="0 0 14 14"
// //             version="1.1"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <title>arrow-down-right</title>
// //             <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
// //               <g stroke="#FFFFFF" strokeWidth="1.5">
// //                 <polyline points="2 12 12 12 12 2"></polyline>
// //                 <line x1="12" y1="12" x2="0" y2="0"></line>
// //               </g>
// //             </g>
// //           </svg>
// //         </div>
// //         <div className="mt-[78px]  text-xs  mb-4 text-gray-400 font-semibold">
// //           CONTACT DETAILS
// //         </div>

// //          <div>
// //          <a href="mailto:harshnesari@gmail.com">
// //           <span className=" text-white text-base pt-5 block">
// //             harshnesari@gmail.com
// //           </span>
// //         </a>
// //          </div>

// //          <div className="mt-4">
// //          <a href="tel:++918861019583" className="mt-4">
// //           <span className=" text-white text-base">
// //            +918861019583
// //           </span>
// //         </a>
// //          </div>

// //          <div className="socials  mt-14 text-gray-400 font-semibold ">
// //             Socials
// //            <div>
// //             <ul>
// //                 <li className="h-20 w-20  rounded-[50%] mb-10 mt-12">
// //                 <a href="https://www.instagram.com/nameisharsh_210/"><img src={image2} alt="" className=""/></a>
// //                 </li>
// //                 <li className="h-20 w-20   rounded-[50%] mb-10 ">
// //                 <a href="https://www.linkedin.com/in/harsh-nesari-135340288/"><img src={image3} alt="" /></a>
// //                 </li>
// //                 <li className="h-20 w-20  rounded-[50%] mb-10 ">
// //                  <a href="https://github.com/Harshnesari-210"><img src={image4} alt="" /></a>
// //                 </li>
// //                 <li className="h-20 w-20  rounded-[50%] mb-10 ">
// //                 <a href="https://x.com/HarshNesari"><img src={image5} alt="" /></a>
// //                 </li>
// //             </ul>
// //            </div>
// //          </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;

// import React, { useState } from "react";
// import MagneticFramer from "./MagneticEffect";
// import image1 from "../utils/logo.png";
// import image2 from "../utils/instagram-logo.png";
// import image3 from "../utils/linkedin.png";
// import image4 from "../utils/github.png";
// import image5 from "../utils/twitter.png";
// import { motion, spring } from "framer-motion";
// import { ReactLenis } from "lenis/dist/lenis-react";
// import { useEffect } from "react";
// import PageTransition from "./PageTransition";

// const Contact = () => {
//   const [text, setText] = useState("");

//   const handleClick = () => {
//     setText("Thank You");
//   };

//   const handleInput = () => {
//     setText("");
//   };

//   return (
//     <ReactLenis root>
//       <div className="   xl:h-[200vh] flex z-0  ">
//         <div className="xl:w-8/12 h-[100%] text-white bg-black">
//           <div className=" xl:flex flex-col pl-52 pt-[100px]">
//             <span className="xl:block font-normal text-[84px] tracking-normal">
//               Let's start a
//             </span>
//             <span className="xl:font-normal text-[84px] -mt-8">
//               project together
//             </span>
//           </div>
//           <div className="xl:flex flex-col pl-52 pt-[150px]">
//             <div className="xl:border-t border-[grey] h-44 w-[700px]">
//               <h5 className="xl:inline-block py-5 pr-10 text-lg pt-11">01</h5>
//               <label htmlFor="name" className="xl:text-3xl">
//                 What's your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="xl:block ml-16 bg-black border-black rounded-lg py-5 px-6 focus:outline-none"
//                 placeholder="Harry Jones"
//                 onChange={handleInput}
//               />
//             </div>

//             <div className="xl:border-t border-[grey] border-solid h-44 w-[700px]">
//               <h5 className="xl:inline-block py-5 pr-10 text-lg pt-11">02</h5>
//               <label htmlFor="email" className="xl:text-3xl">
//                 What's your email?
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 id="email"
//                 className="xl:block ml-16 bg-black border-black rounded-lg py-5 px-6 focus:outline-none"
//                 placeholder="Harry@gmail.com"
//                 onChange={handleInput}
//               />
//             </div>

//             <div className="xl:border-t border-[grey] border-solid h-44 w-[700px]">
//               <h5 className="xl:inline-block py-5 pr-10 text-lg pt-11">03</h5>
//               <label htmlFor="services" className="text-3xl">
//                 What services are you looking for?
//               </label>
//               <input
//                 type="text"
//                 name="services"
//                 id="services"
//                 className="xl:block ml-16 bg-black border-white rounded-lg py-5 px-6 focus:outline-none w-full"
//                 placeholder="Web Design, Web Development..."
//                 onChange={handleInput}
//               />
//             </div>

//             <div className="xl:border-t border-[grey] border-solid h-44 w-[700px]">
//               <h5 className="xl:inline-block py-5 pr-10 text-lg pt-11">04</h5>
//               <label htmlFor="message" className="text-3xl">
//                 Your message
//               </label>
//               <input
//                 type="text"
//                 name="message"
//                 id="message"
//                 className="xl:block ml-16 bg-black border-black rounded-lg py-5 focus:outline-none w-full"
//                 placeholder="Hello Harry, can you help me with..."
//                 onChange={handleInput}
//               />
//             </div>

//             <div className="flex">
//               <div className="xl:send mt-24 z-10 ml-10">
//                 <motion.button
//                   onClick={handleClick}
//                   initial={{ "--x": "100%", scale: 1 }}
//                   animate={{ "--x": "-100%" }}
//                   whileTap={{ scale: 0.97 }}
//                   transition={{
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     repeatDelay: 1,
//                     type: "spring",
//                     stiffness: 20,
//                     damping: 15,
//                     mass: 2,
//                     scale: {
//                       type: "spring",
//                       stiffness: 10,
//                       damping: 5,
//                       mass: 0.1,
//                     },
//                   }}
//                   className="xl:px-6 py-2 rounded-md relative radial-gradient"
//                 >
//                   <span className="xl:text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
//                     Send it!
//                   </span>
//                   <span className="xl:block absolute inset-0 rounded-md p-px linear-overlay" />
//                 </motion.button>
//               </div>

//               <div className="xl:text-div mt-[100px] ml-10">
//                 <span className="text-xl">{text}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="xl:w-4/12 bg-black h-[100%]">
//           <img
//             src={image1}
//             alt="Profile"
//             className="xl:h-24 w-24 rounded-[50%] mt-[210px] border border-white border-solid"
//           />
//           <div className="xl:flex justify-start ml-3 mt-8">
//             <MagneticFramer>
//               <svg
//                 width="20px"
//                 height="20px"
//                 viewBox="0 0 14 14"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="xl:relative z-10"
//               >
//                 <title>arrow-down-right</title>
//                 <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//                   <g stroke="#FFFFFF" strokeWidth="1.5">
//                     <polyline points="2 12 12 12 12 2"></polyline>
//                     <line x1="12" y1="12" x2="0" y2="0"></line>
//                   </g>
//                 </g>
//               </svg>
//             </MagneticFramer>
//           </div>

//           <div className="xl:mt-[78px] text-xs mb-4 text-gray-400 font-semibold">
//             CONTACT DETAILS
//           </div>

//           <div>
//             <a href="mailto:harshnesari@gmail.com">
//               <span className="text-white text-base pt-5 block">
//                 harshnesari@gmail.com
//               </span>
//             </a>
//           </div>

//           <div className="mt-4">
//             <a href="tel:+918861019583">
//               <span className="xl:text-white text-base">+91 8861019583</span>
//             </a>
//           </div>

//           <div className="xl:socials mt-14 text-gray-400 font-semibold">
//             Socials
//             <ul>
//               <li className="xl:h-12 w-12 rounded-[50%] mb-14 mt-14">
//                 <a href="https://www.instagram.com/nameisharsh_210/">
//                   <img src={image2} alt="Instagram" />
//                 </a>
//               </li>
//               <li className="xl:h-12 w-12 rounded-[50%] mb-14">
//                 <a href="https://www.linkedin.com/in/harsh-nesari-135340288/">
//                   <img src={image3} alt="LinkedIn" />
//                 </a>
//               </li>
//               <li className="xl:h-12 w-12 rounded-[50%] mb-14">
//                 <a href="https://github.com/Harshnesari-210">
//                   <img src={image4} alt="GitHub" />
//                 </a>
//               </li>
//               <li className="xl:h-12 w-12 rounded-[50%] mb-14">
//                 <a href="https://x.com/HarshNesari">
//                   <img src={image5} alt="Twitter" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </ReactLenis>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import MagneticFramer from "./MagneticEffect";
import image1 from "../utils/logo.png";
import image2 from "../utils/instagram-logo.png";
import image3 from "../utils/linkedin.png";
import image4 from "../utils/github.png";
import image5 from "../utils/twitter.png";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";

const Contact = () => {
  const [text, setText] = useState("");

  const handleClick = () => {
    setText("Thank You");
  };

  const handleInput = () => {
    setText("");
  };

  return (
    <ReactLenis root>
      <div className="flex flex-col xl:flex-row h-auto xl:h-[200vh] z-0 bg-black w-[100%] ">
        <div className="w-[100%] xl:w-8/12 text-white bg-black">
        <div className=" pl-5 pt-10 xl:flex flex-col xl:pl-52 xl:pt-[100px]">
           <span className=" name text-[44px] block xl:block  xl:text-[64px] tracking-normal">
             Let's start a
           </span>
           <span className="name text-[40px] xl:text-[64px] xl: -mt-2">
             project together
           </span>
         </div>

          <div className="flex flex-col px-6 xl:px-52 pt-16 xl:pt-[150px]">
            <div className="border-t border-[grey] h-auto xl:h-44 w-full xl:w-[700px] py-4 xl:py-0">
              <h5 className="inline-block py-5 pr-10 text-lg pt-11">01</h5>
              <label htmlFor="name" className="xl:text-3xl">
                What's your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block mt-2 ml-12 xl:ml-10 bg-black border-black rounded-lg py-3 xl:py-5 px-4 xl:px-6 focus:outline-none w-full"
                placeholder="Harry Jones"
                onChange={handleInput}
              />
            </div>

            <div className="border-t border-[grey] border-solid h-auto xl:h-44 w-full xl:w-[700px] py-4 xl:py-0 mt-8 xl:mt-0">
              <h5 className="inline-block py-5 pr-10 text-lg pt-11">02</h5>
              <label htmlFor="email" className="xl:text-3xl">
                What's your email?
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="block mt-2 ml-12 xl:ml-10 bg-black border-black rounded-lg py-3 xl:py-5 px-4 xl:px-6 focus:outline-none w-full"
                placeholder="Harry@gmail.com"
                onChange={handleInput}
              />
            </div>

            <div className="border-t border-[grey] border-solid h-auto xl:h-44 w-full xl:w-[700px] py-4 xl:py-0 mt-8 xl:mt-0">
              <h5 className="inline-block py-5 pr-10 text-lg pt-11">03</h5>
              <label
                htmlFor="services"
                className="xl:text-3xl"
              >
                What services are you looking for?
              </label>
              <input
                type="text"
                name="services"
                id="services"
                className="block mt-2 ml-12 xl:ml-10 bg-black border-white rounded-lg py-3 xl:py-5 px-4 xl:px-6 focus:outline-none w-full"
                placeholder="Web Design, Web Development..."
                onChange={handleInput}
              />
            </div>

            <div className="border-t border-[grey] border-solid h-auto xl:h-44 w-full xl:w-[700px] py-4 xl:py-0 mt-8 xl:mt-0">
              <h5 className="inline-block py-5 pr-10 text-lg pt-11">04</h5>
              <label
                htmlFor="message"
                className="xl:text-3xl"
              >
                Your message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                className="block mt-2 ml-16 xl:ml-16 bg-black border-black rounded-lg py-3 xl:py-5 focus:outline-none w-full"
                placeholder="Hello Harry, can you help me with..."
                onChange={handleInput}
              />
            </div>

            <div className=" flex items-center mt-16 xl:mt-24">
              <motion.button
                onClick={handleClick}
                initial={{ "--x": "100%", scale: 1 }}
                animate={{ "--x": "-100%" }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                  type: "spring",
                  stiffness: 20,
                  damping: 15,
                  mass: 2,
                  scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                  },
                }}
                className="px-6 py-2 rounded-md relative radial-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                 <span className="xl:text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
                    Send it!
                   </span>
              </motion.button>

              <div className="ml-4 text-lg xl:text-xl">{text}</div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-4/12 bg-black h-auto xl:h-[100%] flex flex-col items-center xl:items-start pt-16 xl:pt-[210px]  ">
          <img
            src={image1}
            alt="Profile"
            className="h-20 w-20 xl:h-24 xl:w-24 rounded-[50%] border border-white border-solid mb-8 xl:ml-5"
          />
          <MagneticFramer>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
              className="xl:relative z-10 mb-8"
            >
              <title>arrow-down-right</title>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g stroke="#FFFFFF" strokeWidth="1.5">
                  <polyline points="2 12 12 12 12 2"></polyline>
                  <line x1="12" y1="12" x2="0" y2="0"></line>
                </g>
              </g>
            </svg>
          </MagneticFramer>
          <a
            href="mailto:harshnesari@gmail.com"
            className="text-base xl:text-lg text-white mt-4"
          >
            harshnesari@gmail.com
          </a>
          <a
            href="tel:+918861019583"
            className="text-base xl:text-lg text-white mt-4"
          >
            +918861019583
          </a>

          
          <div className=" flex flex-col items-center justify-center xl:socials mt-14 text-gray-400 font-semibold ">
           <span className="xl:pl-5
           ">
           Socials
           </span>
           <div className="w-[80%]">

           
           <ul className="mt-10 flex flex-row xl:flex xl:flex-col">
             <li className="mx-7 xl:h-12 w-12 rounded-[50%] mb-14 xl:mt-14">
               <a href="https://www.instagram.com/nameisharsh_210/">
                 <img src={image2} alt="Instagram" />
               </a>
             </li>
             <li className="mx-7 xl:h-12 w-12 rounded-[50%] mb-14">
               <a href="https://www.linkedin.com/in/harsh-nesari-135340288/">
                 <img src={image3} alt="LinkedIn" />
               </a>
             </li>
             <li className="mx-7 xl:h-12 w-12 rounded-[50%] mb-14">
               <a href="https://github.com/Harshnesari-210">
                 <img src={image4} alt="GitHub" />
               </a>
             </li>
             <li className="mx-7 xl:h-12 w-12 rounded-[50%] mb-14">
               <a href="https://x.com/HarshNesari">
                 <img src={image5} alt="Twitter" />
               </a>
             </li>
           </ul>
           </div>
         </div>
       </div>
        
      </div>
    </ReactLenis>
  );
};

export default Contact;
