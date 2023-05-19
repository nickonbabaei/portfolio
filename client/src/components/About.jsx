import React from 'react'
import headshot from '../images/headshot-removebg.png'

const About = () => {
    return (
        <section class="text-gray-600 body-font bg-gradient-to-b from-emerald-200 to-emerald-100 px-8 sm:px-10 lg:px-20" id='about'>
            <div class='container max-w-screen-xl py-12'>
                <h1 class='text-black font-bold pt-20 text-3xl sm:text-5xl'>About Me</h1>
            </div>
            <div class="lg:flex lg:mx-auto lg:items-center lg:justify-center">
            
                <div className='lg:pr-12'>
                <img class="mx-auto m-12 object-cover object-center rounded" alt="headshot" src={headshot} />

                </div>
                


                <div class="text-center lg:w-2/5 lg:mr-16 w-full">
                    {/* <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1> */}
                    <p class="leading-relaxed pb-4">After recently obtaining a degree in mathematics, I ran into an old friend who introduced me to my newfound passion for coding. The logical thinking and problem-solving skills honed during my studies seamlessly transitioned into the world of programming. The synergy between mathematics and coding deeply fascinate me. To be able to turn essentially any idea into a fixed reality, really resonates with me.</p>
                    <p class="leading-relaxed">After recently obtaining a degree in mathematics, I ran into an old friend who introduced me to my newfound passion for coding. The logical thinking and problem-solving skills honed during my studies seamlessly transitioned into the world of programming. The synergy between mathematics and coding deeply fascinate me. To be able to turn essentially any idea into a fixed reality, really resonates with me.</p>
                    {/* <p class="leading-relaxed">fdfdjgjgjghjfdfdjgjgjghjfdfdjgjgjghjfdfdjgjgjghjfdfdjgjgjghjfdfdjgjgjghjfdfdjgjgjghjfdfdjgjgjghjfdfdjgjgjghjfdfdjgjgjghjfdfdjgjgjghj</p> */}

                </div>
            </div>
        </section>
    )
}

export default About