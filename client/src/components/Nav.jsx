import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
    return (
        <nav className="bg-transparent backdrop-blur-md fixed w-full z-20 top-0 left-0 border-b border-blue-200">
            <div className="max-w-screen-3xl flex flex-wrap items-center justify-center mx-auto p-4">
                {/* <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a> */}
                <div className="relative inline-block group">



                    <button id="dropdownDefaultButton" type='button' data-dropdown-toggle="dropdown" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div id="dropdown" class="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-12 md:mt-0">
                        <li>
                            <Link to='home' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded md:bg-transparent md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to='about' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded md:bg-transparent md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">About</Link>
                        </li>
                        <li>
                            <Link to='projects' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded md:bg-transparent md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">Projects</Link>
                        </li>
                        <li>
                            <Link to='skills' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded md:bg-transparent md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">Skills</Link>
                        </li>
                        <li>
                            <Link to='contact' spy={true} smooth={true} offset={50} duration={500} className="block py-2 pl-3 pr-4 text-white cursor-pointer rounded md:bg-transparent md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav