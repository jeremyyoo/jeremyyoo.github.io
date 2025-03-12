import React, { useRef } from "react"
import { useScroll, motion } from "framer-motion"
import LiIcon from "./LiIcon"

const Details = ({ degree, school, time, location, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl">
                    {degree}
                </h3>
                <h4 className="font-bold">
                    {school}
                </h4>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {location}
                </span>

                <p className="font-medium w-full">
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Education
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />
                <u1 className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        degree="Ph.D. in Materials Science and Engineering"
                        school="Georgia Institute of Technology"
                        time="2014.08-2020.05"
                        location="Atlanta, GA, USA"
                        info="Concentration in materials characterization and image processing."
                    />

                    <Details
                        degree="Bachelor of Science in Materials Science and Engineering"
                        school="Korea University"
                        time="2010.03-2014.08"
                        location="Seoul, South Korea"
                        info="Coursework focused on semiconductors."
                    />

                    <Details
                        degree="Foreign Exchange Program"
                        school="Nagoya University"
                        time="2012.04-2012.08"
                        location="Nagoya, Aichi Prefecture, Japan"
                        info="Foreign exchange program for learning Japanese language and culture."
                    />

                </u1>
            </div>
        </div>
    )
}

export default Education