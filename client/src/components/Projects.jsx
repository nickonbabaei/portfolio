import React from 'react'
import SportifyPreview from '../images/sportify-preview2.png'
import ShapeshiftPreview from '../images/shapeshift-preview.png'
import PlatepalsPreview from '../images/platepals-preview.png'
import Skills from './Skills'

const Projects = () => {
    return (

        <section class="text-gray-600 body-font bg-gradient-to-b from-emerald-200 via-cyan-200 to-cyan-400 px-8" id='projects'>
            <div class="container max-w-screen-xl py-24 mx-auto border-4 border-white">
                <h1 class='text-black sm:text-left text-center font-bold pt-24 text-2xl sm:text-5xl'>Projects</h1>
                <div class="flex flex-wrap justify-center">
                    <div class="md:w-3/6 sm:w-full py-4 px-2">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block xl:w-5/6" src={ShapeshiftPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold">Shape Shift</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="md:w-1/2 py-4 px-2 sm:w-full border-2 border-white">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block xl:w-5/6" src={SportifyPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold">Sportify</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>

                    <div class="md:w-3/6 sm:w-full py-4 px-2">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block xl:w-5/6" src={PlatepalsPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold">Plate Pals</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="md:w-3/6 sm:w-full py-4 px-2">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block xl:w-5/6" src={SportifyPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold">Zanzibar</h3>
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