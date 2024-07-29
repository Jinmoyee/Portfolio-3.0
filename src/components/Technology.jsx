import React from 'react'
import html from "../assets/icons/html.png"
import css from "../assets/icons/css.png"
import js from "../assets/icons/js.png"
import react from "../assets/icons/react.png"
import bootstrap from "../assets/icons/boot.png"
import tailwind from "../assets/icons/tailwind.png"
import fire from "../assets/icons/fire.png"
import node from "../assets/icons/node.png"
import mongo from "../assets/icons/mongo.png"
import { animate, motion } from "framer-motion"

const iconView = (duration) => ({
  initial: { y: -10},
  animate: {
    y : [10, -10],
    transition: {
      ease: "linear",
      duration,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

export default function Technology() {
  return (
    <div className='dark:text-white h-[100%]'>
        <motion.h1 
          whileInView={{y:0, opacity:1}}
          initial={{y:-50, opacity:0}} 
          transition={{duration:1.5}}
          className='text-3xl font-thin text-center mb-6 md:text-4xl lg:text-5xl mt-5 lg:mt-0'>Technology</motion.h1>
        <div className='border border-black mb-6 mx-6 dark:border-white'></div>
            <motion.div
              whileInView={{x:0, opacity:1}}
              initial={{x:-100, opacity:0}} 
              transition={{duration:1.5}}
              className='icons flex flex-wrap justify-center gap-8 m-2 mt-[6rem] mb-[5rem]'>
                <motion.img
                  variants={iconView(1.5)}
                  initial="initial"
                  animate="animate"
                  src={html} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-1'/>
                <motion.img 
                  variants={iconView(2)}
                  initial="initial"
                  animate="animate"
                  src={css} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-3'/>
                <motion.img 
                  variants={iconView(1.5)}
                  initial="initial"
                  animate="animate"
                  src={js} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-3'/>
                <motion.img 
                  variants={iconView(2)}
                  initial="initial"
                  animate="animate"
                  src={react} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-3'/>
                <motion.img 
                  variants={iconView(1.5)}
                  initial="initial"
                  animate="animate"
                  src={bootstrap} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white'/>
                <motion.img 
                  variants={iconView(2)}
                  initial="initial"
                  animate="animate"
                  src={tailwind} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-2'/>
                <motion.img 
                  variants={iconView(1.5)}
                  initial="initial"
                  animate="animate"
                  src={fire} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white'/>
                <motion.img 
                  variants={iconView(2)}
                  initial="initial"
                  animate="animate"
                  src={node} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-3'/>
                <motion.img 
                  variants={iconView(1.5)}
                  initial="initial"
                  animate="animate"
                  src={mongo} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-2'/>
            </motion.div>
    </div>
  )
}
