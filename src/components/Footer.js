import React from "react"
import Layout from "./Layout"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
        font-medium text-lg
        '>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                
                <div className="flex items-center">
                Built with a template by&nbsp;
                {/* <span className="text-primary text-2xlpx-1">&#9825;</span>  */}
                <Link href="https://devdreaming.com/" className='underline underline-offset-2'>CodeBucks</Link>
                </div>
                
                <Link href="mailto: yungsukyoo.gt@gmail.com" target={"_blank"} className='underline underline-offset-2'>
                Contact Me
                </Link>
            </Layout>
        </footer>
    )
}

export default Footer