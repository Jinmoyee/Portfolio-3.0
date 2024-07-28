import Pic1 from "../assets/images/Real Estate.png"
import Pic2 from "../assets/images/Chat App.png"
import Pic3 from "../assets/images/HTML-CSS Shopping Website.png"
import Pic4 from "../assets/images/Blog.png"
import Pic5 from "../assets/images/Food.png"
import Pic6 from "../assets/images/Parallax.png"




export default function Projects() {
    return (
        <div className="dark:text-white h-full">
            <h1 className='text-3xl font-thin text-center mb-6 md:text-4xl lg:text-5xl mt-5 lg:mt-0'>Projects</h1>
            <div className="border border-black mb-14 lg:mb-24 mx-6 dark:border-white"></div>

            <div className='flex items-center justify-center flex-col md:justify-around lg:flex-row gap-5 mb-16'>
                <div className='my-image'>
                    <a href="https://jt-estate.onrender.com/" target="_blank">
                        <img src={Pic1} alt="" className="w-[18rem] sm:w-[20rem] ml-0 lg:ml-20 rounded-lg" />
                    </a>
                </div>
                <div className='w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] mt-4 lg:mt-0'>
                    <div className='about'>
                        <h2 className="text-xl font-bold pb-2 text-center lg:text-left text-[#83e7ac]">Real Estate Website</h2>
                        <p className="text-center lg:text-left">It is an online platform built using the MERN stack offering a seamless shopping experience. With its robust backend and dynamic frontend, it enables users to browse, purchase, and manage products effortlessly, embodying the essence of modern ecommerce solutions.</p>
                        <div className="data-used flex gap-1 mt-2 flex-wrap justify-center lg:justify-start">
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">REACT</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">NodeJs</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">ExpressJs</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">MongoDB</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">FireBase</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col md:justify-around lg:flex-row gap-5 mb-16'>
                <div className='my-image'>
                    <a href="https://real-time-chat-app-h84z.onrender.com/" target="_blank">
                        <img src={Pic2} alt="" className="w-[18rem] sm:w-[20rem] ml-0 lg:ml-20 rounded-lg" />
                    </a>
                </div>
                <div className='w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] mt-4 lg:mt-0'>
                    <div className='about'>
                        <h2 className="text-xl font-bold pb-2 text-center lg:text-left text-[#83e7ac]">Real Time Chat Website</h2>
                        <p className="text-center lg:text-left">It is a real-time messaging platform built using the MERN stack .Users can engage in instant communication, create chat rooms, and share multimedia seamlessly. With its responsive design and robust backend.</p>
                        <div className="data-used flex gap-1 mt-2 flex-wrap justify-center lg:justify-start">
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">REACT</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">NodeJs</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">ExpressJs</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">MongoDB</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col md:justify-around lg:flex-row gap-5 mb-16'>
                <div className='my-image'>
                    <a href="https://jinmoyee.github.io/HTML-CSS-Shopping-Website/index.html" target="_blank">
                        <img src={Pic3} alt="" className="w-[18rem] sm:w-[20rem] ml-0 lg:ml-20 rounded-lg" />
                    </a>
                </div>
                <div className='w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] mt-4 lg:mt-0'>
                    <div className='about'>
                        <h2 className="text-xl font-bold pb-2 text-center lg:text-left text-[#83e7ac]">HTML-CSS Shopping Website</h2>
                        <p className="text-center lg:text-left">It is a user-friendly online platform designed with intuitive navigation and visually appealing layouts. Seamlessly integrating HTML for content structure and CSS for styling, it offers a delightful shopping experience.</p>
                        <div className="data-used flex gap-1 mt-2 flex-wrap justify-center lg:justify-start">
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">HTML</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">CSS</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col md:justify-around lg:flex-row gap-5 mb-16'>
                <div className='my-image'>
                    <a href="https://jinmoyee.github.io/Blog-HTML-AND-CSS-Website/" target="_blank">
                        <img src={Pic4} alt="" className="w-[18rem] sm:w-[20rem] ml-0 lg:ml-20 rounded-lg" />
                    </a>
                </div>
                <div className='w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] mt-4 lg:mt-0'>
                    <div className='about'>
                        <h2 className="text-xl font-bold pb-2 text-center lg:text-left text-[#83e7ac]">Blog Website</h2>
                        <p className="text-center lg:text-left">It is your ultimate destination for all things web development. Whether you're a beginner or an expert, discover insightful tutorials, tips, and tricks to enhance your HTML and CSS skills. Stay updated with the latest trends and techniques to create stunning websites.</p>
                        <div className="data-used flex gap-1 mt-2 flex-wrap justify-center lg:justify-start">
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">HTML</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">CSS</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col md:justify-around lg:flex-row gap-5 mb-16'>
                <div className='my-image'>
                    <a href="https://jinmoyee.github.io/Restaurant-HTML-AND-CSS-Website/" target="_blank">
                        <img src={Pic5} alt="" className="w-[18rem] sm:w-[20rem] ml-0 lg:ml-20 rounded-lg" />
                    </a>
                </div>
                <div className='w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] mt-4 lg:mt-0'>
                    <div className='about'>
                        <h2 className="text-xl font-bold pb-2 text-center lg:text-left text-[#83e7ac]">Food Website</h2>
                        <p className="text-center lg:text-left">It is a dynamic web platform offering an immersive dining experience. With seamless navigation and visually captivating design, it combines the artistry of HTML and CSS to showcase culinary delights and engage visitors.</p>
                        <div className="data-used flex gap-1 mt-2 flex-wrap justify-center lg:justify-start">
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">HTML</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">CSS</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col md:justify-around lg:flex-row gap-5 mb-16'>
                <div className='my-image'>
                    <a href="https://jinmoyee.github.io/Parallax-HTML-AND-CSS-Website/" target="_blank">
                        <img src={Pic6} alt="" className="w-[18rem] sm:w-[20rem] ml-0 lg:ml-20 rounded-lg" />
                    </a>
                </div>
                <div className='w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] mt-4 lg:mt-0'>
                    <div className='about'>
                        <h2 className="text-xl font-bold pb-2 text-center lg:text-left text-[#83e7ac]">Parallax Website</h2>
                        <p className="text-center lg:text-left">It is a dynamic platform that employs parallax scrolling effects achieved through HTML and CSS. It offers an immersive browsing experience, where background images move at different speeds to create a sense of depth.</p>
                        <div className="data-used flex gap-1 mt-2 flex-wrap justify-center lg:justify-start">
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">HTML</h6>
                            <h6 className="border border-black dark:border-white p-1 text-sm rounded-md">CSS</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}