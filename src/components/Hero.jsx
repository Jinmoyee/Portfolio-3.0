import Pic from "../assets/images/Hero.jpeg"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

export default function Hero() {
  return (
    <div className='flex dark:text-white items-center h-screen justify-center lg:justify-around flex-col lg:flex-row gap-5'>
        <div className='mb-15 lg:mb-24 ml-0 lg:ml-20 w-[95%] md:w-[80%] lg:w-[50%]'>
            <div className='name'>
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-thin mb-10 mt-5 lg:mt-0 text-center lg:text-left lg:mb-14'>Jinmoyee Thakuria</motion.h1>
            </div>
            <div className='about'>
                <motion.h2 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className='text-[#83e7ac] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-5 mt-5 text-center lg:text-left'>Full Stack Developer</motion.h2>
                <motion.p
                  variants={container(1)}
                  initial="hidden"
                  animate="visible" 
                  className="text-center lg:text-left">I am a passionate and dedicated web developer with a strong foundation in both front-end and back-end technologies. With a deep understanding of modern web development practices, I have honed my skills in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase. My diverse skill set allows me to build comprehensive, full-stack applications that are both visually appealing and functionally robust.</motion.p>
            </div>
        </div>
        <div className='my-image mt-5'>
            <motion.img
              initial={{x:100,opacity:0}} 
              animate={{x:0,opacity:1}}
              transition={{duration:1, delay:1.1}}
              src={Pic} alt="" className="h-[15rem] w-[14rem] sm:h-[20rem] sm:w-[19rem] lg:h-[25rem] lg:w-[24rem] xl:h-[30rem] xl:w-[29rem] mr-0 lg:mr-20 rounded-xl"/>
        </div>
    </div>
  )
}
