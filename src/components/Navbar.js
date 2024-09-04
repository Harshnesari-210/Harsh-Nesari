// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const variants = {
//   open: { opacity: 1, x: 0, height: "100vh", width: "80%", xl: {width: "30%"} },
//   closed: { opacity: 0, x: "100%", height: "100vh", width: "80%", xl: { width: "30%" } },
// };

// const itemVariants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "50%" },
// };

// const itemTransition = {
//   duration: 0.5,
//   ease: [0.76, 0, 0.24, 1],
// };

// const Nav = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div className="overflow-x-hidden overflow-y-hidden">
//       <motion.nav
//         className="overflow-x-hidden overflow-y-hidden bg-white fixed top-0 right-0 border border-white border-solid z-40" // Adjusted z-index
//         animate={show ? "open" : "closed"}
//         variants={variants}
//         transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
//         initial={false}
//         exit="closed"
//       >
//         <motion.div className="h-full flex flex-col justify-center items-center text-black mr-32">
//           <ul className="flex flex-col items-center justify-center space-y-8 h-full w-full ">
//             <span className="-mt-20 mr-6">Navigation</span>
//             <div className="border border-black border-solid w-[80%] ml-40 mb-5 -mt-3"></div>
//             <motion.li
//               className="cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-1 text-3xl pb-5 pt-5 "
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShow(false)}
//               variants={itemVariants}
//               initial="closed"
//               animate={show ? "open" : "closed"}
//               transition={{ ...itemTransition, delay: 0.1 }}
//             >
//               <Link to="/" className="mr-5">
//                 Home
//               </Link>
//             </motion.li>
//             <motion.li
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-1  text-3xl pb-5"
//               onClick={() => setShow(false)}
//               variants={itemVariants}
//               initial="closed"
//               animate={show ? "open" : "closed"}
//               transition={{ ...itemTransition, delay: 0.3 }}
//             >
//               <Link to="/Project">Projects</Link>
//             </motion.li>
//             <motion.li
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-1  text-3xl pb-5"
//               onClick={() => setShow(false)}
//               variants={itemVariants}
//               initial="closed"
//               animate={show ? "open" : "closed"}
//               transition={{ ...itemTransition, delay: 0.4 }}
//             >
//               <Link to="/Contact">Contact</Link>
//             </motion.li>
//           </ul>
//         </motion.div>
//       </motion.nav>

//       <motion.button
//         initial={false}
//         className="toggle text-white  flex items-center justify-center relative   z-50
//          h-20 w-20 rounded-full bg-black transition-colors hover:bg-[#455ce9] hover:text-white"
//         onClick={() => setShow((show) => !show)}
//         // whileHover={{ scale: 1.1 }}
//         // whileTap={{ scale: 0.9 }}
//         animate={show ? "open" : "close"}
//       >
//         <motion.span
//           style={{
//             left: "50%",
//             top: "35%",
//             x: "-50%",
//             y: "-50%",
//           }}
//           variants={{
//             open: {
//               rotate: ["0deg", "0deg", "45deg"],
//               top: ["35%", "50%", "50%"],
//             },
//             close: {
//               rotate: ["45deg", "0deg", "0deg"],
//               top: ["50%", "50%", "35%"],
//             },
//           }}
//           className="absolute h-1 w-10 bg-white"
//         />
//         <motion.span
//           style={{
//             left: "50%",
//             top: "50%",
//             x: "-50%",
//             y: "-50%",
//           }}
//           variants={{
//             open: {
//               rotate: ["0deg", "0deg", "-45deg"],
//             },
//             close: {
//               rotate: ["-45deg", "0deg", "0deg"],
//             },
//           }}
//           className=" absolute h-1 w-10 bg-white"
//         />
//         <motion.span
//           style={{
//             left: "60%",
//             bottom: "35%",
//             x: "-50%",
//             y: "50%",
//           }}
//           variants={{
//             open: {
//               rotate: ["0deg", "0deg", "45deg"],
//               bottom: ["35%", "50%", "50%"],
//               left: "50%",
//             },
//             close: {
//               rotate: ["45deg", "0deg", "0deg"],
//               bottom: ["50%", "50%", "35%"],
//               left: "60%",
//             },
//           }}
//           className="absolute h-1 w-5 bg-white"
//         />
//       </motion.button>
//     </div>
//   );
// };

// export default Nav;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [isXL, setIsXL] = useState(window.innerWidth >= 1280); // 1280px is the default xl breakpoint in Tailwind CSS

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const variants = {
    open: { opacity: 1, x: 0, height: "100vh", width: isXL ? "30%" : "80%" },
    closed: { opacity: 0, x: "100%", height: "100vh", width: isXL ? "30%" : "80%" },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "50%" },
  };

  const itemTransition = {
    duration: 0.5,
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden name font-mediumbold">
      <motion.nav
        className="overflow-x-hidden overflow-y-hidden bg-white fixed top-0 right-0 border border-white border-solid z-40"
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        initial={false}
        exit="closed"
      >
        <motion.div className="h-full flex flex-col justify-center items-center text-black mr-32">
          <ul className="flex flex-col items-center justify-center space-y-8 h-full w-full">
            <span className="-mt-20 mr-6 tracking-wider font-thin">Navigation</span>
            <div className="border border-black border-solid w-[80%] xl:ml-[140px] mb-5 -mt-3 ml-7"></div>
            <motion.li
              className="cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-1 text-3xl pb-5 pt-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShow(false)}
              variants={itemVariants}
              initial="closed"
              animate={show ? "open" : "closed"}
              transition={{ ...itemTransition, delay: 0.1 }}
            >
              <Link to="/" className="mr-5">
                Home
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-1 text-3xl pb-5"
              onClick={() => setShow(false)}
              variants={itemVariants}
              initial="closed"
              animate={show ? "open" : "closed"}
              transition={{ ...itemTransition, delay: 0.3 }}
            >
              <Link to="/Project">Projects</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-1 text-3xl pb-5"
              onClick={() => setShow(false)}
              variants={itemVariants}
              initial="closed"
              animate={show ? "open" : "closed"}
              transition={{ ...itemTransition, delay: 0.4 }}
            >
              <Link to="/Contact">Contact</Link>
            </motion.li>
          </ul>
        </motion.div>
      </motion.nav>

      <motion.button
        initial={false}
        className="toggle text-white flex items-center justify-center relative z-50 h-20 w-20 rounded-full bg-black transition-colors hover:bg-[#455ce9] hover:text-white"
        onClick={() => setShow((show) => !show)}
        animate={show ? "open" : "close"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
          className="absolute h-1 w-10 bg-white"
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
          className="absolute h-1 w-10 bg-white"
        />
        <motion.span
          style={{
            left: "60%",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["35%", "50%", "50%"],
              left: "50%",
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
              left: "60%",
            },
          }}
          className="absolute h-1 w-5 bg-white"
        />
      </motion.button>
    </div>
  );
};

export default Nav;
