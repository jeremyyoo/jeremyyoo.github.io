import React, { useRef } from "react"
import { useScroll, motion } from "framer-motion"
import LiIcon from "./LiIcon"

const Details = ({ position, companyLink, company, time, location, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<a href={companyLink}
                    target="_blank"
                    className="text-primaryDark capitalize"
                >@{company}</a></h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {location}
                </span>

                <p className="font-medium w-full">
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
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
                        position="Software Research Scientist/Engineer"
                        companyLink="https://www.intel.com/"
                        company="Intel"
                        time="2022.04-2024.11"
                        location="Hillsboro, OR, USA"
                        work="Worked on a team calibrating computer models (optical proximity correction) to optimize photomask performance for high yield manufacturing.  
                            Developed and tested machine learning image classifiers that selected images of failed photoresist prints on wafers. 
                            Developed and maintained internal Python automation tools using Gitlab."
                    />

                    <Details
                        position="Postdoctoral Research Fellow"
                        companyLink="https://mse.engin.umich.edu/people/amitmis/group"
                        company="University of Michigan"
                        time="2020.09-2022.03"
                        location="Ann Arbor, MI, USA"
                        work="Worked as a Postdoctoral Fellow in Professor Amit Misra's group combining EBSD and TEM to characterize dislocation pileup near grain boundaries in magnesium alloys."
                    />

                    <Details
                        position="Graduate Research Intern"
                        companyLink="https://www.lanl.gov/engage/organizations/physical-sciences/materials-science-technology"
                        company="Los Alamos National Lab"
                        time="2018.05-2018.08"
                        location="Los Alamos, NM, USA"
                        work="Worked as a summer intern characterizing spall surface of tantalum after shock loading. 
                            Developed MATLAB analysis script to process grain boundary orientation from EBSD data."
                    />

                    <Details
                        position="Graduate Research Assistant"
                        companyLink="https://kacherlab.gatech.edu/people/"
                        company="Georgia Institute of Technology"
                        time="2014.08-2020.08"
                        location="Atlanta, GA, USA"
                        work="Pursed a Doctorate in Materials Science and Engineering under Professor Josh Kacher focusing on developing multiscale electron microscopy techniques to study the deformation behavior of aluminum alloys under three-point bending. 
                            Developed a MATLAB script counting the number of dispersoid particles and their area fractions in STEM images. 
                            Combined high resolution EBSD, focused ion beam, and TEM data to investigate the microstructural changes in stress-tested aluminum. 
                            Quantify strain accumulation near microstructural defects using data science techniques."
                    />

                </u1>
            </div>
        </div>
    )
}

export default Experience