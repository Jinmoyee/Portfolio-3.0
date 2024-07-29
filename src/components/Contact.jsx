import React from 'react'
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <div className='dark:text-white'>
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 1.5 }} 
          className='text-3xl font-thin text-center mb-6 md:text-4xl lg:text-5xl mt-5 lg:mt-0'>Get in Touch</motion.h1>
        <div className='border border-black mb-6 mx-6 dark:border-white'></div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}  
          className='text-center text-base sm:text-lg mb-10 mt-2'>
            <h3>Guwahati, Assam, India</h3>
            <h3>+91 9395911645</h3>
            <h3>+91 6003248976</h3>
            <a href="mailto:jinmoyee99@gmail.com" className='underline'>jinmoyee99@gmail.com</a>
        </motion.div>
    </div>
  )
}
