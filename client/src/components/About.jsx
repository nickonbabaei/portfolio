import React from 'react'
import headshot from '../images/headshot-removebg.png'

const About = () => {
    return (
        <section class="text-gray-600 body-font bg-gradient-to-b from-emerald-300 to-emerald-200 px-4 sm:px-8 " id='about'>
            <div class='max-w-screen-xl mx-auto container sm:block py-12'>
                <h1 class='text-black font-bold pt-20 text-2xl sm:text-4xl'>About Me</h1>
            </div>

            <div class="flex flex-col lg:flex-row items-center justify-center">
                <div className='lg:pr-12'>
                    <img class="mx-auto mb-4 lg:mb-0 object-cover object-center rounded" alt="headshot" src={headshot} />
                </div>

                <div class="text-center lg:w-2/5 lg:mr-16 w-full">
                    <p class="leading-relaxed pb-4 sm:text-lg text-base">After recently obtaining a degree in mathematics, I ran into an old friend who introduced me to my newfound passion for coding. The logical thinking and problem-solving skills honed during my studies seamlessly transitioned into the world of programming. The synergy between mathematics and coding deeply fascinate me. To be able to turn essentially any idea into a fixed reality, really resonates with me.</p>
                    <p class="leading-relaxed sm:text-lg text-base">After recently obtaining a degree in mathematics, I ran into an old friend who introduced me to my newfound passion for coding. The logical thinking and problem-solving skills honed during my studies seamlessly transitioned into the world of programming. The synergy between mathematics and coding deeply fascinate me. To be able to turn essentially any idea into a fixed reality, really resonates with me.</p>
                </div>
            </div>
        </section>
    )
}

export default About