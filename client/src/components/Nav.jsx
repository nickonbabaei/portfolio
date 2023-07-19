import React, { useState } from 'react'
import { Link } from 'react-scroll'


const Nav = () => {

    const [open, setOpen] = useState(false)

    const handleDropDown = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <nav className="bg-transparent backdrop-blur-md fixed w-full z-20 top-0 left-0 border-b border-blue-200">
            <div id="dropdown" class={`absolute w-screen h-screen bg-gradient-to-b from-blue-200 to-purple-200 ${open ? "block" : "hidden"}`}>
                <div className='flex justify-center'>
                   <button onClick={handleClose} className='text-4xl'>x</button>
                </div>

                <div className='flex flex-col items-center h-full justify-center pb-24 text-2xl text-gray-700 font-medium'>
                    <div>
                        <Link to="home" onClick={() => setOpen(false)} spy={true} smooth={true} offset={50} duration={500} class="block my-4 cursor-pointer hover:scale-110">Home</Link>
                    </div>
                    <div>
                        <Link to="about" onClick={() => setOpen(false)} spy={true} smooth={true} offset={50} duration={500} class="block my-4 cursor-pointer hover:scale-110">About</Link>
                    </div>
                    <div>
                        <Link to="projects" onClick={() => setOpen(false)} spy={true} smooth={true} offset={50} duration={500} class="block my-4 cursor-pointer hover:scale-110">Projects</Link>
                    </div>
                    <div>
                        <Link to="skills" onClick={() => setOpen(false)} spy={true} smooth={true} offset={50} duration={500} class="block my-4 cursor-pointer hover:scale-110">Skills</Link>
                    </div>
                    <div>
                        <Link to="contact" onClick={() => setOpen(false)} spy={true} smooth={true} offset={50} duration={500} class="block my-4 cursor-pointer hover:scale-110">Contact</Link>
                    </div>
                </div>


            </div>

            <div className="max-w-screen-3xl flex flex-wrap items-center justify-center mx-auto p-4">
                <div className="relative inline-block group">

                    <button onClick={handleDropDown} className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-200" >
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>


                </div>
                <div className="items-center justify-between hidden w-full sm:flex sm:w-auto sm:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 sm:p-0 mt-4 font-medium sm:flex-row sm:space-x-12 sm:mt-0">
                        <li className=''>
                            <Link to='home' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded sm:bg-transparent sm:hover:scale-110 sm:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to='about' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded sm:bg-transparent sm:hover:scale-110 sm:p-0">About</Link>
                        </li>
                        <li>
                            <Link to='projects' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded sm:bg-transparent sm:hover:scale-110 sm:p-0">Projects</Link>
                        </li>
                        <li>
                            <Link to='skills' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded sm:bg-transparent sm:hover:scale-110 sm:p-0">Skills</Link>
                        </li>
                        <li>
                            <Link to='contact' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded sm:bg-transparent sm:hover:scale-110 sm:p-0">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav