import Pic2 from "../assets/images/hero2.jpg"

export default function About() {
    return (
        <div className="dark:text-white h-screen">
            <h1 className='text-3xl font-thin text-center mb-6 md:text-4xl lg:text-5xl mt-5 lg:mt-0'>About Me</h1>
            <div className="border border-black mb-14 lg:mb-24 mx-6 dark:border-white"></div>
            <div className='flex items-center justify-center flex-col lg:justify-around lg:flex-row gap-5'>
                <div className='my-image'>
                    <img src={Pic2} alt="" className="h-[15rem] w-[20rem] sm:h-[20rem] sm:w-[25rem] lg:h-[20rem] lg:w-[30rem] xl:h-[25rem] xl:w-[35rem] ml-0 lg:ml-20 rounded-lg" />
                </div>
                <div className='ml-0 lg:ml-20 w-[95%] md:w-[80%] lg:w-[45%] mt-4 lg:mt-0'>
                    <div className='about'>
                        <p className="text-center lg:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nam, aliquid ipsam autem neque animi tenetur amet similique dolorum quibusdam aspernatur unde eveniet obcaecati illum dolore assumenda suscipit ullam, porro eligendi quae ex eius. Molestiae tempore, eligendi voluptas quos, impedit obcaecati id soluta fuga et voluptatem atque dolores recusandae eius perferendis ad incidunt non maxime debitis iusto ea ipsa enim harum nobis accusantium! Deleniti, quam nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}