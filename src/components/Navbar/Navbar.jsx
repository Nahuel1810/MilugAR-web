import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScroll(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `fixed top-0 left-0 w-full ${scroll ? 'bg-scroll' : 'bg-transparent'
        }`;
    return (
        <nav className={navbarClasses}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MilugAR</span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Descarga ahora</button>
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover: dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent hover:text-blue-700 md:p-0 hover:text-blue-500 text-white text-white bg-transparent border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent hover:text-blue-700 md:p-0 hover:text-blue-500 text-white text-white bg-transparent border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent hover:text-blue-700 md:p-0 hover:text-blue-500 text-white text-white bg-transparent border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
