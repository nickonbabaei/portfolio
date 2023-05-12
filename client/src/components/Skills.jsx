import React from 'react'
import ReactLogo from '../images/react-logo.jpg'

const Skills = () => {
    return (

        <div class='max-w-full flex-col justify-center border-4 border-white'>
            <h1>Languages & Technologies in my Arsenal</h1>
            <div class='grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between'>
                <div>
                <img class="object-cover object-center rounded" alt="react" src={ReactLogo} />
                    <p>React</p>

                </div>
                <div>
                <img class="object-cover object-center rounded" alt="react" src={ReactLogo} />
                    <p>React</p>

                </div>
                <div>
                <img class="object-cover object-center rounded" alt="react" src={ReactLogo} />
                    <p>React</p>

                </div>
                <div>
                <img class="object-cover object-center rounded" alt="react" src={ReactLogo} />
                    <p>React</p>

                </div>
                <div>
                <img class="object-cover object-center rounded" alt="react" src={ReactLogo} />
                    <p>React</p>

                </div>
                <div>
                <img class="object-cover object-center rounded" alt="react" src={ReactLogo} />
                    <p>React</p>

                </div>
                <div>
                <img class="object-cover object-center rounded" alt="react" src={ReactLogo} />
                    <p>React</p>

                </div>
                


            </div>



        </div>

    )
}

export default Skills