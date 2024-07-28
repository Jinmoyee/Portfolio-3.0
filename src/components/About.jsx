import Pic2 from "../assets/images/hero2.jpg"

export default function About() {
    return (
        <div className="dark:text-white h-full mb-20">
            <h1 className='text-3xl font-thin text-center mb-6 md:text-4xl lg:text-5xl'>About Me</h1>
            <div className="border border-black mb-14 lg:mb-24 mx-6 dark:border-white"></div>
            <div className='flex items-center justify-center flex-col lg:justify-around lg:flex-row gap-5'>
                <div className='my-image'>
                    <img src={Pic2} alt="" className="h-[15rem] w-[20rem] sm:h-[20rem] sm:w-[25rem] lg:h-[20rem] lg:w-[30rem] xl:h-[25rem] xl:w-[35rem] ml-0 lg:ml-20 rounded-lg" />
                </div>
                <div className='ml-0 lg:ml-20 w-[95%] md:w-[80%] lg:w-[45%] mt-4 lg:mt-0'>
                    <div className='about'>
                        <p className="text-center lg:text-left">I was born in Guwahati and completed my schooling at Don Bosco High School Boko. After finishing my 10th grade, I pursued my 11th and 12th education at JN College Boko. Currently, I am pursuing a B.Tech in Computer Science, where I have developed a strong foundation in web development and programming. Throughout my academic journey and personal projects, I have gained proficiency in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase. These skills enable me to create responsive and dynamic front-end interfaces as well as robust and scalable back-end applications. My comprehensive knowledge of both front-end and back-end technologies allows me to contribute effectively to all aspects of a project. I am committed to continuous learning and staying up-to-date with the latest technologies and industry trends. I thrive in collaborative environments, enjoying the process of working with designers, developers, and stakeholders to bring projects to life. I am excited about the opportunity to leverage my skills and passion for web development to contribute to innovative and impactful projects.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}