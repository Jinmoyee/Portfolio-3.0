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



export default function Technology() {
  return (
    <div className='dark:text-white h-[100%]'>
        <h1 className='text-5xl font-thin text-center mb-6'>Technology</h1>
        <div className='border border-black mb-6 mx-6 dark:border-white'></div>
            <div className='icons flex flex-wrap justify-center gap-8 m-2 mt-[6rem] mb-[5rem]'>
                <img src={html} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-1'/>
                <img src={css} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-3'/>
                <img src={js} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-3'/>
                <img src={react} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-3'/>
                <img src={bootstrap} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white'/>
                <img src={tailwind} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-2'/>
                <img src={fire} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white'/>
                <img src={node} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-3'/>
                <img src={mongo} alt="" className='h-[90px] w-[90px] border-4 border-black rounded-xl dark:border-white p-2'/>
            </div>
    </div>
  )
}
