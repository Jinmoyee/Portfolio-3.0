import Pic2 from "../assets/images/hero2.jpg"

export default function About() {
    return (
        <div className="dark:text-white h-screen">
            <h1 className='text-5xl font-thin text-center mt-10 mb-16'>About Me</h1>
            <div className='flex items-center justify-around'>
                <div className='my-image'>
                    <img src={Pic2} alt="" className="h-[30rem] w-[40rem] ml-20" />
                </div>
                <div className='ml-20 w-[45%]'>
                    <div className='about'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nam, aliquid ipsam autem neque animi tenetur amet similique dolorum quibusdam aspernatur unde eveniet obcaecati illum dolore assumenda suscipit ullam, porro eligendi quae ex eius. Molestiae tempore, eligendi voluptas quos, impedit obcaecati id soluta fuga et voluptatem atque dolores recusandae eius perferendis ad incidunt non maxime debitis iusto ea ipsa enim harum nobis accusantium! Deleniti, quam nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}