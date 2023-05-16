import React from 'react'
import SportifyPreview from '../images/sportify-preview.png'
import Skills from './Skills'

const Projects = () => {
    return (

        <section class="text-gray-600 body-font bg-gradient-to-b from-emerald-100 to-cyan-200" id='projects'>
            {/* <div class='flex justify-center py-12'>
                <h1 class='text-black font-bold pt-24 text-3xl sm:text-5xl'>Projects</h1>
            </div> */}
            <div class="container max-w-screen-xl py-24 mx-auto">
            <h1 class='text-black font-bold pt-24 text-3xl sm:text-5xl'>Projects</h1>
                <div class="flex flex-wrap justify-center">
                    <div class="lg:w-1/2 md:w-4/6 py-4 px-20 w-5/6">
                        <a class="block relative rounded overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center w-full h-full block xl:w-5/6" src={SportifyPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-medium">Sportify</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-4/6 py-4 px-20 w-5/6">
                        <a class="block relative rounded overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center w-full h-full block xl:w-5/6" src={SportifyPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-medium">Sportify</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-4/6 py-4 px-20 w-5/6">
                        <a class="block relative rounded overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center w-full h-full block xl:w-5/6" src={SportifyPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-medium">Sportify</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-4/6 py-4 px-20 w-5/6">
                        <a class="block relative rounded overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center w-full h-full block xl:w-5/6" src={SportifyPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-medium">Sportify</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    
                    
                   




                </div>
            </div>
            <Skills />
        </section>
    )
}

export default Projects