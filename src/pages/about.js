import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import profilePic from "../../public/images/profile/ice_climbing_cropped.jpg";
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"

const about = () => {
    return (
        <>
            <Head>
                <title>Yoo Portfolio | About</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="A picture is worth a thousand words" className="mb-16" />
                    <div className="grid w-full grid-col-8 gap-16">
                        
                        <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                            <Image src={profilePic} alt="Yoo" className="w-full h-auto rounded-2xl" />
                        </div>
                        
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About Me</h2>

                            <p className="font-medium">
                                Guten Tag! My name is <b>Yung Suk (Jeremy) Yoo</b>, and I am a lifelong student of everything related to visualization: images, graphs, maps, etc.
                                I am always looking for innovative ways to process image data and presenting results using creative visuals.
                                With <b>over 7 years of electron microscopy (SEM, TEM, STEM, EBSD, FIB)</b> and <b>3 years of machine learning experience</b>, I am always looking for interesting problems to solve.
                            </p>

                            <p className="my-4 font-medium">
                                My passion for visualization started when I was in graduate school. While pursuing my Ph.D. using electron microcopy, I realized that most of our attention and efforts are focused on visual ergonomics and data.
                                My Ph.D. thesis presentation was filled with images that was palatable to both the technical and non-expert audience.
                                I believe that visualization will only become more important in an age where technology becomes more important in our lives.
                                It is critical not only to know how to process image data but also to convert information-dense results into digestible content like graphs and maps.
                            </p>

                            <p className="font-medium">
                                With this online portfolio, I hope to explore interesting ways to visualize numerical data and process images.
                                I look forward to the day when I can discuss my work with people from different areas of expertise.
                            </p>
                        
                        
                        {/* <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                            <Image src={profilePic} alt="Yoo" className="w-full h-auto rounded-2xl" />
                        </div> */}
                        
                        </div>
                    </div>

                    <Experience />
                    <Education />
                    <Skills />
                </Layout>
            </main>
        </>
    )
}

export default about
