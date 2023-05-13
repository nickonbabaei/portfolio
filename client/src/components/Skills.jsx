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

        <div class='max-w-full flex justify-center border-4 border-white'>
            
            <div class='max-w-screen-lg border-4 border-white'>
            <h1 class='text-black font-bold text-3xl sm:text-5xl'>Languages & Technologies in my Arsenal</h1>


                
                <div class='flex flex-wrap justify-center'>
                    <div class='flex flex-col m-6'>
                        <img class="sm:w-32 sm:h-28 w-14 rounded" alt="react" src={ReactLogo} />
                        <p class='mx-auto'>React</p>

                    </div >
                    <div class='flex flex-col m-6'>
                        <img class="sm:w-24 sm:h-24 w-14 rounded-3xl" alt="react" src={JsLogo} />
                        <p class='mx-auto pt-4'>JavaScript</p>

                    </div>
                    <div class='flex flex-col m-6'>
                        <img class="sm:w-32 sm:h-30 w-14 rounded" alt="react" src={VueLogo} />
                        <p class='mx-auto'>Vue</p>

                    </div>
                    <div class='flex flex-col m-6'>
                        <img class="sm:w-20 sm:h-28 w-14 rounded" alt="react" src={HtmlLogo} />
                        <p class='mx-auto'>HTML</p>

                    </div>
                    <div class='flex flex-col m-6 sm:pl-4'>
                        <img class="sm:w-20 sm:h-28 w-14 rounded" alt="react" src={CssLogo} />
                        <p class='mx-auto'>CSS</p>

                    </div>
                    
                    <div class='flex flex-col m-6'> 
                        <img class="sm:w-32 sm:h-24 w-14 rounded" alt="react" src={TailwindLogo} />
                        <p class='mx-auto pt-4 '>Tailwind</p>

                    </div>
                    
                    <div class='flex flex-col m-6 '>
                        <img class="sm:w-28 sm:h-28 w-14 mt-2 rounded" alt="react" src={PythonLogo} />
                        <p class='mx-auto '>Python</p>

                    </div>
                    <div class='flex flex-col m-6'>
                        <img class="sm:w-28 sm:h-30 w-14 rounded" alt="react" src={NodeLogo} />
                        <p class='mx-auto'>Node</p>

                    </div>
                    <div class='flex flex-col m-6'>
                        <img class="sm:w-28 sm:h-26 w-14 object-cover object-center rounded" alt="react" src={PostgresLogo} />
                        <p class='mx-auto'>PostgreSQL</p>

                    </div>
                    <div class='flex flex-col m-6'>
                        <img class="sm:h-28 sm:w-10 w-8 h-16 ml-4 rounded" alt="react" src={MongodbLogo} />
                        <p class='mx-auto'>MongoDB</p>

                    </div>
                    <div class='flex flex-col mb-6 mr-6 ml-6 mt-8'>
                        <img class="sm:w-24 sm:h-24 mb-2 w-14 rounded-3xl" alt="react" src={MysqlLogo} />
                        <p class='mx-auto'>MySQL</p>

                    </div>
                    <div class='flex flex-col m-6'>
                        <img class="w-14 rounded sm:w-28 sm:h-28" alt="react" src={GithubLogo} />
                        <p class='mx-auto'>GitHub</p>

                    </div>
                    


                </div>
            </div>



        </div>

    )
}

export default Skills