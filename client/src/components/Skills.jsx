import React from 'react'
import ReactLogo from '../images/react-logo.png'
import CssLogo from '../images/css-logo.png'
import GithubLogo from '../images/github-logo.png'
import HtmlLogo from '../images/html-logo.png'
import JsLogo from '../images/js-logo.png'
import MongodbLogo from '../images/mongodb-logo.png'
import NodeLogo from '../images/node-logo.png'
import PostgresLogo from '../images/postgres-logo.png'
import PythonLogo from '../images/python-logo.png'
import TailwindLogo from '../images/tailwind-logo.png'
import VueLogo from '../images/vue-logo.png'
import ExpressLogo from '../images/express-logo.png'

const Skills = () => {
    return (
        <div class='max-w-screen-xl mx-auto flex flex-col justify-center' id='skills'>
            <h1 class='text-black font-bold pt-32 text-2xl pb-4 sm:text-4xl '>Languages & Technologies in my Arsenal</h1>
            <div class='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center sm:gap-2 py-8 md:px-0'>

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="w-20 sm:w-28 sm:h-24 mx-auto rounded" alt="react" src={ReactLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>React</p>
                </div >

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="w-16 sm:w-20 sm:h-20 mx-auto rounded-3xl" alt="react" src={JsLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>JavaScript</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="w-20 sm:w-28 sm:h-30 mx-auto rounded" alt="react" src={VueLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>Vue</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="w-14 sm:w-20 sm:h-28 mx-auto rounded" alt="react" src={HtmlLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>HTML</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="w-14 sm:w-20 sm:h-24 mx-auto rounded" alt="react" src={CssLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>CSS</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="w-24 sm:w-32 sm:h-24 mx-auto rounded" alt="react" src={TailwindLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>Tailwind</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-6 '>
                    <img class="w-20 sm:w-28 sm:h-28 mt-2 mx-auto rounded" alt="react" src={PythonLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>Python</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="sm:w-28 sm:h-30 w-20 mx-auto rounded" alt="react" src={NodeLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>Node.js</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="sm:w-28 sm:h-26 w-20 object-cover object-center  mx-auto rounded" alt="react" src={PostgresLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>PostgreSQL</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="h-20 w-8 sm:h-28 sm:w-10 mx-auto" alt="react" src={MongodbLogo} />
                    <p class='sm:text-base font-medium md:text-lg text-sm mx-auto'>MongoDB</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-6'>
                    <img class="mx-auto w-16 sm:w-24 sm:h-24 mb-2 rounded-3xl" alt="react" src={ExpressLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>Express.js</p>
                </div>

                <div class='flex flex-col sm:justify-between justify-around m-5'>
                    <img class="mx-auto rounded w-20 sm:w-28 sm:h-28" alt="react" src={GithubLogo} />
                    <p class='mx-auto font-medium sm:text-base md:text-lg text-sm'>GitHub</p>
                </div>
            </div>
        </div>
    )
}

export default Skills