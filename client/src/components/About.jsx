import React from 'react'
import headshot from '../images/headshot-removebg.png'

const About = () => {
    return (
        <section class="text-gray-600 body-font bg-gradient-to-b from-emerald-300 to-emerald-200 px-4 sm:px-8 " id='about'>
            <div class='max-w-screen-xl mx-auto container sm:block py-12'>
                <h1 class='text-black font-bold pt-20 text-2xl sm:text-4xl'>Who is Nickon?</h1>
            </div>

            <div class="flex flex-col lg:flex-row items-center justify-center">
                <div className='lg:pr-12'>
                    <img class="mx-auto mb-4 lg:mb-0 object-cover object-center rounded" alt="headshot" src={headshot} />
                </div>

                <div class="lg:w-2/5 lg:mr-16 w-full">
                    
                    <p class="leading-relaxed sm:text-lg text-base text-black font-semibold pb-4">I am a Software Engineer who recently completed General Assembly's Software 
                    Engineering Immersive Bootcamp and a Math degree from Queen's University. 
                    </p> 
                    <p class="leading-relaxed sm:text-lg text-base pb-4">After recently obtaining a degree in mathematics, I ran into an old friend who introduced me to my newfound passion for coding. The logical thinking and problem-solving skills honed during my studies seamlessly transitioned into the world of programming. The synergy between mathematics and coding deeply fascinate me. To be able to turn essentially any idea into a fixed reality, really resonates with me.</p>
                    <p class="leading-relaxed sm:text-lg text-base">In my spare time, I find joy in various activities such as playing basketball, cooking, snowboarding, hiking, and traveling to new and exciting destinations. My fascination with technology extends beyond my professional life, as I constantly seek out opportunities to engage with the latest and coolest tech innovations.
                    </p> 
                </div>
            </div>
        </section>
    )
}

export default About