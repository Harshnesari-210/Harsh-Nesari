// import React from "react";
// import { motion } from "framer-motion";

// const PageTransition = () => {
//   return () => (
//     <div>
//       <Ogcomponent  />
//       <motion.div
//         className="side-in fixed w-[100%] top-0 left-0 h-[100vh] bg-black origin-bottom"
//         initial={{ scaleY: 0 }}
//         animate={{ scaleY: 1 }}
//         exit={{ scaleY: 0 }}
//         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//       />
//       <motion.div
//         className="side-out fixed w-[100%] top-0 left-0 h-[100vh] bg-black origin-top"
//         initial={{ scaleY: 1 }}
//         animate={{ scaleY: 0 }}
//         exit={{ scaleY: 1 }}
//         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//       />
     
//     </div> 
//   );
// };

// export default PageTransition;

import {motion} from "framer-motion"

const PageTransition=()=>{
  return(
    <div className="page h-[100vh] w-full bg-blue-500 z-50 opacity-50">

    </div>

  )
}

export default PageTransition;