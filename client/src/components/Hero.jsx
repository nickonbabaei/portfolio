import React from 'react'
import heroImage from '../images/portBackground2.jpg'
import heroGif from '../images/portGif.gif'
const Hero = () => {
    return (

        <section className="bg-gray-900 text-white">

            <div
                className="mx-auto max-w-full px-4 py-32 flex h-screen items-center"
                style={{ backgroundImage: `url(${heroGif})`, backgroundSize: 'cover' }}
            >

                <div className="mx-auto max-w-3xl text-center backdrop-blur-md border-4 rounded-lg p-4">
                    <h1
                        className="bg-gradient-to-r from-white to-sky-500 bg-clip-text text-7xl text-transparent sm:text-7xl"
                    >
                        Hi There, <br></br> I'm Nickon

                        {/* <span className="sm:block"> Increase Conversion. </span> */}
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="/get-started"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="/about"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>


        </section>


    )
}

export default Hero