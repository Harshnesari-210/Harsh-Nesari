import React, { useRef } from "react";
const SECTION_HEIGHT = 1500;
import image from "../utils/Netflix.png"; 
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import {ReactLenis} from "lenis/dist/lenis-react"
import Project from "./Project";
import image2 from "../utils/Facebook.png"; 
import image3 from "../utils/Microsoft.png"; 
import image4 from "../utils/Portfolio.png";
import image5 from "../utils/bg1.jpg";

const AnimateScrolling = () => {
    return (
        <div className="bg-black ">
            <ReactLenis root>
            <Hero />
            <Project/>
            </ReactLenis>
        </div>
    );
};

const Hero = () => {
    return (
        <div
            className="relative w-full"
            style={{
                height: `calc(${SECTION_HEIGHT}px + 100vh)`,
            }}
        >
            <CenterImage />
            <ParallaxImage />
            
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-black/0 to-black"/>
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);
    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);

    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`; 

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                opacity,
                clipPath,
                backgroundImage: `url(${image5})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize,
            }}
        />
    );
};

const ParallaxImage = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px] relative z-20">
            <ParallaxImg
                src={image}
                alt="image"
                start={-200}
                end={200}
                className="w-1/3 my-8 h-44"
            /> 
            <ParallaxImg
                src={image4}
                alt="image"
                start={200}
                end={-250}
                className="w-2/3 mx-auto ml-520"
            /> 
            <ParallaxImg
                src={image3}
                alt="image"
                start={-200}
                end={200}
                className="w-1/3 ml-auto mt-10"
            /> 
            <ParallaxImg
                src={image2}
                alt="image"
                start={0}
                end={-500}
                className="w-5/12  ml-24"
            /> 
        </div>
    )
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    return (
        <motion.img
            ref={ref}
            src={src}
            alt={alt}
            className={className}
            style={{
                opacity,
                scale
            }}
        />
    );
};

export default AnimateScrolling;

