import React from 'react'
import ReactLogo from '../images/react-logo.png'
import CssLogo from '../images/css-logo.png'
import GithubLogo from '../images/github-logo.png'
import HtmlLogo from '../images/html-logo.png'
import JsLogo from '../images/js-logo.png'
import MongodbLogo from '../images/mongodb-logo.png'
import MysqlLogo from '../images/mysql-logo.png'
import NodeLogo from '../images/node-logo.png'
import PostgresLogo from '../images/postgres-logo.png'
import PythonLogo from '../images/python-logo.png'
import TailwindLogo from '../images/tailwind-logo.png'
import VueLogo from '../images/vue-logo.png'

const Skills = () => {
    return (

        <div class='max-w-full border-4 border-white'>

            <div class='max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full border-4 border-white' id='skills'>
                <h1 class='text-black font-bold pt-32 text-3xl pb-24 sm:text-5xl'>Languages & Technologies in my Arsenal</h1>


                <div class='grid grid-cols-2 md:grid-cols-6 gap-2 text-center py-8 px-12 md:px-0'>
                    
                        <div class='flex flex-col m-6'>
                            <img class="w-28 h-24 mx-auto rounded" alt="react" src={ReactLogo} />
                            <p class='mx-auto'>React</p>

                        </div >
                        <div class='flex flex-col m-6'>
                            <img class="w-20 h-20 mx-auto rounded-3xl" alt="react" src={JsLogo} />
                            <p class='mx-auto pt-4'>JavaScript</p>

                        </div>
                        <div class='flex flex-col m-6'>
                            <img class="w-28 h-30 mx-auto rounded" alt="react" src={VueLogo} />
                            <p class='mx-auto'>Vue</p>

                        </div>
                        <div class='flex flex-col m-6'>
                            <img class="w-20 h-28 mx-auto rounded" alt="react" src={HtmlLogo} />
                            <p class='mx-auto'>HTML</p>

                        </div>
                        <div class='flex flex-col m-6 sm:pl-4'>
                            <img class="w-20 h-24 mx-auto rounded" alt="react" src={CssLogo} />
                            <p class='mx-auto'>CSS</p>

                        </div>

                        <div class='flex flex-col m-6'>
                            <img class="w-32 h-24 mx-auto rounded" alt="react" src={TailwindLogo} />
                            <p class='mx-auto pt-4'>Tailwind</p>

                        </div>

                        <div class='flex flex-col m-6 '>
                            <img class="w-28 h-28 mt-2 mx-auto rounded" alt="react" src={PythonLogo} />
                            <p class='mx-auto '>Python</p>

                        </div>
                        <div class='flex flex-col m-6'>
                            <img class="w-28 h-30 mx-auto rounded" alt="react" src={NodeLogo} />
                            <p class='mx-auto'>Node</p>

                        </div>
                        <div class='flex flex-col m-6'>
                            <img class="w-28 h-26 object-cover object-center  mx-auto rounded" alt="react" src={PostgresLogo} />
                            <p class='mx-auto'>PostgreSQL</p>

                        </div>
                        <div class='flex flex-col m-6'>
                            <img class="h-28 w-10 mx-auto" alt="react" src={MongodbLogo} />
                            <p class=''>MongoDB</p>

                        </div>
                        <div class='flex flex-col mb-6 mr-6 ml-6 mt-8'>
                            <img class="mx-auto w-24 h-24 mb-2 rounded-3xl" alt="react" src={MysqlLogo} />
                            <p class='mx-auto'>MySQL</p>

                        </div>
                        <div class='flex flex-col m-6'>
                            <img class="mx-auto rounded w-28 h-28" alt="react" src={GithubLogo} />
                            <p class='mx-auto'>GitHub</p>

                        </div>
                   



                </div>
            </div>



        </div>

    )
}

export default Skills