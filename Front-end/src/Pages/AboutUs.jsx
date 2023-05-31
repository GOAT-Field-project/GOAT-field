import React from 'react'
import Us from '../AboutUs.json'
const AboutUs = () => {
    const backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1026%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c183 C 144%2c227.8 432%2c425.6 720%2c407 C 1008%2c388.4 1296%2c153.4 1440%2c90L1440 560L0 560z' fill='rgba(214%2c 220%2c 226%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1026'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`;

    return (
        <div className='bg-[#d6dce2] '>
            <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-white-300" style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
            >
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative">
                                <img
                                    src="https://img.freepik.com/free-photo/diverse-businesspeople-having-meeting_53876-103954.jpg?w=1380&t=st=1685543448~exp=1685544048~hmac=aed33e88652f280146a7d522b2c9c1f01daf545354b2b502b6efea3d12e886c8"
                                    alt=""
                                    className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                                />
                                <div className="absolute z-10 hidden w-full h-full bg-[#82CD47] rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                                <div className="absolute z-50 text-[#82CD47] transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="w-14 h-14 bi bi-play-circle-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="relative">
                                <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-black opacity-5 md:block hidden">
                                    About Us
                                </h1>
                                <h1 className="pl-2 text-3xl font-bold border-l-8 border-[#82CD47] md:text-5xl text-black-300">
                                    Welcome to our site
                                </h1>
                            </div>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-800 dark:text-gray-800">
                                Welcome to our website, the leading platform for booking sports fields and playgrounds. We strive to provide a seamless and convenient experience for sports enthusiasts and athletes to reserve their preferred venues.</p>


                            <a
                                href="/ContactUS"
                                className="px-4 py-3 text-gray-50 transition-all transform bg-[#82CD47] rounded-[80px] hover:bg-[#54B435] dark:hover:text-gray-100 dark:text-gray-100 "
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section >



            < div className='bg-[#d6dce2]  '>

                <hr className="border-black" />
                {/* Container for demo purpose */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}



                <div className="flex flex-wrap container my-24 px-6 mx-auto ">
                    {/* Section: Design Block */}
                    <section className="mb-32 text-gray-800 text-center">
                        <h2 className="text-3xl font-bold mb-12 text-black">Meet our team</h2>

                        <div className="flex flex-wrap justify-center">
                            {Us.map((Us, index) => (
                                <div className="mb-6 lg:mb-0 lg:w-1/4 sm:w-1/2 pr-4" key={index}>
                                    <div className="bg-white block rounded-lg shadow-lg m-4">
                                        <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                            <img
                                                src={Us.image}
                                                className="w-full rounded-t-lg"
                                            />
                                            <a href="#!">
                                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                                            </a>
                                            <svg
                                                className="absolute"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 1440 320"
                                                style={{ left: 0, bottom: 0 }}
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className="p-6">
                                            <h5 className="text-lg font-bold mb-4">{Us.name}</h5>
                                            <p className="text-gray-500 mb-4">{Us.role}</p>
                                            <ul className="list-inside flex mx-auto justify-center">
                                                <a href="#!" className="px-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                        className="w-4 h-4 text-blue-600"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            fillRule="evenodd"
                                                            d="M7.999.207C3.582.207 0 3.805 0 8.16c0 3.596 2.28 6.655 5.447 7.732.399.073.546-.173.546-.385 0-.19-.007-.694-.011-1.363-2.218.482-2.684-1.066-2.684-1.066-.362-.92-.883-1.166-.883-1.166-.722-.494.055-.485.055-.485.8.057 1.22.822 1.22.822.712 1.22 1.867.868 2.318.663.072-.515.278-.867.505-1.067-1.772-.201-3.634-.891-3.634-3.962 0-.874.307-1.587.813-2.146-.083-.2-.353-1.015.077-2.116 0 0 .67-.215 2.2.82.638-.178 1.32-.266 2.002-.27.68.004 1.363.092 2.004.27 1.526-1.035 2.194-.82 2.194-.82.43 1.1.16 1.916.08 2.116.507.56.81 1.272.81 2.146 0 3.078-1.865 3.758-3.642 3.955.287.248.543.733.543 1.478 0 1.066-.01 1.927-.01 2.193 0 .213.144.462.55.383C13.727 14.807 16 11.754 16 8.16c0-4.355-3.582-7.953-7.999-7.953z"
                                                        />
                                                    </svg>
                                                </a>
                                                <a href="#!" className="px-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                        className="w-4 h-4 text-blue-600"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                                        />
                                                    </svg>
                                                </a>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </section>
                    {/* Section: Design Block */}
                </div>

                {/* Container for demo purpose */}
            </div>




        </div >
    )
}

export default AboutUs