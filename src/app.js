// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Contact from "./components/Contact";
// import Project from "./components/Project";
// import PageTransition from "./components/PageTransition";
// import Curve from "./components/Curve";

// const App = () => {
//   return (
//     <div>
//       <div className="h-[100vh]">
//         <Header />
//         {/* <Curve/> */}
//         <AnimatePresence mode="wait">
//           <Outlet />
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Hero />,
//       },
//       {
//         path: "/Project",
//         element: <Project />,
//       },
//       {
//         path: "/Contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Project from "./components/Project";
import PageTransition from "./components/PageTransition";

import Error from "./components/Error";
import AnimateScroll from "./components/AnimateScroll"

const App = () => {
  return (
    <div>
      <div className="h-[100vh]">
        <Header />
        <AnimatePresence mode="wait">
          <Outlet/>
        </AnimatePresence>
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Hero />,
        
      },
      {
        path: "/Project",
        element:<AnimateScroll/> ,
      },
      {
        path: "/Contact",
        element: <Contact />,
       
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
