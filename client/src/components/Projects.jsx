import React from 'react'
import SportifyPreview from '../images/sportify-preview.png'

const Projects = () => {
    return (

        <section class="text-gray-600 body-font bg-gradient-to-b from-emerald-50 to-white">
            <div class='flex justify-center py-12'>
                <h1 class='text-black font-bold text-3xl underline sm:text-5xl'>Projects</h1>
            </div>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap justify-center -m-4">
                    <div class="lg:w-1/2 md:w-4/6 p-4 w-full">
                        <a class="block relative rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={SportifyPreview} />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-900 title-font text-lg font-medium">Sportify</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer he Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                            <p class="mt-1">$21.15</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                            <p class="mt-1">$12.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                            <p class="mt-1">$18.40</p>
                        </div>
                    </div>




                </div>
            </div>
        </section>
    )
}

export default Projects