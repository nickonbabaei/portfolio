import React from 'react'
import SportifyPreview from '../images/sportify-preview2.png'
import ShapeshiftPreview from '../images/shapeshift-preview.png'
import PlatepalsPreview from '../images/platepals-preview.png'
import ZanzibarPreview from '../images/zanzibar-preview.png'
import Skills from './Skills'

const Projects = () => {
    return (

        <section class="text-gray-600 body-font bg-gradient-to-b from-emerald-200 via-cyan-200 to-cyan-400 px-4 sm:px-8" id='projects'>
            <div class="container max-w-screen-xl pt-24 mx-auto">
                <h1 class='text-black font-bold py-8 text-2xl sm:text-4xl'>My Projects</h1>
                <div class="flex flex-wrap justify-center">
                    <div class="md:w-3/6 sm:w-full py-4 px-2">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block xl:w-5/6" src={ShapeshiftPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold pb-2">Shape Shift</h3>
                            <h2 class="text-gray-900 title-font text-base font-medium xl:w-5/6">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            
                        </div>
                    </div>
                    <div class="md:w-1/2 py-4 px-2 sm:w-full border-2 border-white">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block xl:w-5/6" src={SportifyPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold pb-2">Sportify</h3>
                            <h2 class="text-gray-900 title-font text-base font-medium xl:w-5/6">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            
                        </div>
                    </div>

                    <div class="md:w-3/6 sm:w-full py-4 px-2">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block xl:w-5/6" src={PlatepalsPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold pb-2">Plate Pals</h3>
                            <h2 class="text-gray-900 title-font text-base font-medium xl:w-5/6">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            
                        </div>
                    </div>
                    <div class="md:w-3/6 sm:w-full py-4 px-2">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block xl:w-5/6" src={ZanzibarPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold pb-2">Zanzibar</h3>
                            <h2 class="text-gray-900 title-font text-base font-medium xl:w-5/6">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            
                        </div>
                    </div>







                </div>
            </div>
            <Skills />
        </section>
    )
}

export default Projects