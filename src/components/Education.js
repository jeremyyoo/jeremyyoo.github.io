import React, { useRef } from "react"
import { useScroll, motion } from "framer-motion"
import LiIcon from "./LiIcon"

const Details = ({ degree, school, time, location, info }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl">{degree}</h3>
                <h4 className="capitalize font-bold text-xl">{school}</h4>
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
                Professional Experience
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />
                <u1 className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        degree="Ph.D. in Materials Science and Engineering"
                        school="Georgia Institute of Technology"
                        time="2014.08-2020.05"
                        location="Atlanta, GA, USA"
                        info="Developed multiscale electron microscopy framework that collected various microstructural information at mesoscale and nanoscale. 
                            Combining SEM, EBSD, transmission Kikuchi diffraction, and TEM techniques provided a more holistic approach to probe the deformation behavior of metals. 
                            Furthermore, the statistical correlation between microstructural defects and strain localization in deformed metals based on mesoscale data 
                            can be confirmed using nanoscale data. Ultimately, this framework provided a more comprehensive approach to understanding how various microstructural defects
                            affect the deformation behavior of aluminum alloys."
                    />

                    {/* Thesis dissertation link: https://repository.gatech.edu/entities/publication/9c2ac82e-555e-4c38-8642-a738c1121448 */}

                    <Details
                        degree="Bachelor of Science in Materials Science and Engineering"
                        school="Korea University"
                        time="2010.03-2014.08"
                        location="Atlanta, GA, USA"
                        info="Coursework focused primarily on semiconductor processing and solid state physics. 
                            Soft skills gained during undergraduate years include: C++, Japanese (JLPT N2), and technical writing"
                    />
                </u1>
            </div>
        </div>
    )
}

export default Education