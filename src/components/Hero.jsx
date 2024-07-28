import Pic from "../assets/images/Hero.jpeg"

export default function Hero() {
  return (
    <div className='flex dark:text-white items-center h-screen justify-center lg:justify-around flex-col lg:flex-row gap-5'>
        <div className='mb-15 lg:mb-24 ml-0 lg:ml-20 w-[95%] md:w-[80%] lg:w-[50%]'>
            <div className='name'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-thin mb-10 mt-5 lg:mt-0 text-center lg:text-left lg:mb-14'>Jinmoyee Thakuria</h1>
            </div>
            <div className='about'>
                <h2 className='text-[#83e7ac] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-5 mt-5 text-center lg:text-left'>Full Stack Developer</h2>
                <p className="text-center lg:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nam, aliquid ipsam autem neque animi tenetur amet similique dolorum quibusdam aspernatur unde eveniet obcaecati illum dolore assumenda suscipit ullam, porro eligendi quae ex eius. Molestiae tempore, eligendi voluptas quos, impedit obcaecati id soluta fuga et voluptatem atque dolores recusandae eius perferendis ad incidunt non maxime debitis iusto ea ipsa enim harum nobis accusantium! Deleniti, quam nesciunt.</p>
            </div>
        </div>
        <div className='my-image mb-10'>
            <img src={Pic} alt="" className="h-[15rem] w-[14rem] sm:h-[20rem] sm:w-[19rem] lg:h-[25rem] lg:w-[24rem] xl:h-[30rem] xl:w-[29rem] mr-0 lg:mr-20 rounded-xl"/>
        </div>
    </div>
  )
}
