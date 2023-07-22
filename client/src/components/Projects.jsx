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
                <h1 class='text-black font-bold pt-8 text-2xl sm:text-4xl'>My Projects</h1>
                 
                <p className='pt-2'>All applications are desktop and mobile friendly. Please give the servers a little time to load.</p>
                <br/>
                <div class="flex flex-wrap justify-center">
                    <div class="md:w-3/6 sm:w-full py-4 px-2">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block" src={ShapeshiftPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold pb-2">Shape Shift</h3>
                            <h2 class="text-gray-900 title-font text-base font-medium xl:w-5/6 pb-4">A calorie/macro tracking app that provides </h2>

                        </div>
                        <div className='flex'>
                            <a href='https://myshapeshift.vercel.app/' target='_blank' rel='noreferrer' className='mr-4 hover:text-blue-700 hover:scale-110'>
                                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 25 25">
                                    <path fill-rule="evenodd" d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </a>
                            <a href='https://github.com/nickonbabaei/ShapeShift' target='_blank' rel='noreferrer' className='hover:text-blue-700 hover:scale-110'>
                                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 25 25">
                                    <path fill-rule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 py-4 px-2 sm:w-full">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block" src={SportifyPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold pb-2">Sportify</h3>
                            <h2 class="text-gray-900 title-font text-base font-medium xl:w-5/6">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>

                        </div>
                    </div>

                    <div class="md:w-3/6 sm:w-full py-4 px-2">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block" src={PlatepalsPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-bold pb-2">Plate Pals</h3>
                            <h2 class="text-gray-900 title-font text-base font-medium xl:w-5/6">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>

                        </div>
                    </div>
                    <div class="md:w-3/6 sm:w-full py-4 px-2">
                        <a class="block relative overflow-hidden">
                            <img alt="Sportify Application" class="object-cover object-center rounded-lg w-full h-full block" src={ZanzibarPreview} />
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