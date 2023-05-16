import React from 'react'
import headshot from '../images/headshot-removebg.png'

const About = () => {
    return (
        <section class="text-gray-600 body-font bg-gradient-to-b from-emerald-200 to-emerald-100" id='about'>
            <div class='flex justify-center py-12'>
                <h1 class='text-black font-bold pt-20 text-3xl sm:text-5xl'>About Me</h1>
            </div>
            <div class="md:container md:flex md:mx-auto md:items-center md:justify-center md:pr-32">


                <img class="lg:w-3/6 md:w-3/6 ml-8 mb-10 object-cover object-center rounded" alt="headshot" src={headshot} />


                <div class="text-center lg:w-2/5 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
                    <p class="leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>

                </div>
            </div>
        </section>
        // <section class='bg-sky-400'>
        //     <div class="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-6 lg:px-8">
        //         <div class="max-w-3xl">
        //             <h2 class="text-3xl font-bold sm:text-4xl">
        //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias
        //                 doloribus impedit.
        //             </h2>
        //         </div>

        //         <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        //             <div class="relative h-64 overflow-hidden lg:h-full">
        //                 <img
        //                     alt="Party"
        //                     src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
        //                     class="absolute inset-0 object-cover w-60 h-full lg:w-full"
        //                 />
        //             </div>

        //             <div class="lg:py-16">
        //                 <article class="space-y-4 text-gray-600">
        //                     <p>
        //                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        //                         hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        //                         minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        //                     </p>

        //                     <p>
        //                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        //                         explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
        //                         vel mollitia? Vel provident culpa dignissimos possimus, perferendis
        //                         consectetur odit accusantium dolorem amet voluptates aliquid,
        //                         ducimus tempore incidunt quas. Veritatis molestias tempora
        //                         distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
        //                         illum impedit!
        //                     </p>
        //                 </article>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default About