import Pic from "../assets/images/Hero.jpeg"

export default function Hero() {
  return (
    <div className='flex dark:text-white items-center h-[86%] justify-around'>
        <div className='mb-14 ml-20 w-[50%]'>
            <div className='name'>
            <h1 className='text-7xl font-thin mb-14'>Jinmoyee Thakuria</h1>
            </div>
            <div className='about'>
                <h2 className='text-[#A6FFCB] text-5xl font-medium mb-5 mt-5'>Full Stack Developer</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nam, aliquid ipsam autem neque animi tenetur amet similique dolorum quibusdam aspernatur unde eveniet obcaecati illum dolore assumenda suscipit ullam, porro eligendi quae ex eius. Molestiae tempore, eligendi voluptas quos, impedit obcaecati id soluta fuga et voluptatem atque dolores recusandae eius perferendis ad incidunt non maxime debitis iusto ea ipsa enim harum nobis accusantium! Deleniti, quam nesciunt.</p>
            </div>
        </div>
        <div className='my-image'>
            <img src={Pic} alt="" className="h-[30rem] w-[30rem] mr-20"/>
        </div>
    </div>
  )
}
