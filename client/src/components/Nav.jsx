import React from 'react'

const Nav = () => {
    return (
        <nav className="bg-transparent backdrop-blur-md fixed w-full z-20 top-0 left-0 border-b border-blue-200">
            <div className="max-w-screen-3xl flex flex-wrap items-center justify-center mx-auto p-4">
                {/* <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a> */}
                <div className="flex md:order-2">
                

                    
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-12 md:mt-0">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">Skills</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white md:hover:underline md:focus:underline md:hover:scale-110 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav