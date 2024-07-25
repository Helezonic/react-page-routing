
import React from "react"
import {Link, NavLink} from "react-router-dom"


function Header ({setId}) {

    return (
        <>
        
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-white lg:px-6 p-3.5 ">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className=" h-12"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex gap-2 max-w-sm">
                            <input type='text'
                            //value = {userid}
                            placeholder="NOT IMPLEMENTED"
                            //onChange={setId(userid)}
                            className=" bg-white p-3 italic max-w-48 focus:border-orange-500 focus:outline-none border-2 font-medium rounded-xl "></input>
                            <button
                            type="submit"
                            className="md:w-32 bg-orange-700 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition ease-in-out duration-300"
                            >Get Github
                            </button>
                        </div>
                       
                        <div
                        className=" justify-between items-center w-full  sm:w-auto"
                        id="mobile-menu-2" >
                            <ul className="flex flex-col mt-4 font-medium sm:flex-row sm:space-x-8 sm:mt-0">
                                <li>
                                    <NavLink to=''
                                    className={({isActive}) =>
                                        `${isActive? "text-orange-400" : "text-gray-900"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` }
                                    > Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-400" : "text-gray-900"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` }
                                    > About
                                    </NavLink>
                                </li>  
                                <li>
                                    <NavLink to = '/contact'
                                    className={({isActive}) =>
                                        `${isActive? "text-orange-400" : "text-gray-900"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` }
                                    > Contact Us
                                    </NavLink>
                                </li>  
                                <li>
                                    <NavLink to = '/github'
                                    className={({isActive}) =>
                                        `${isActive? "text-orange-400" : "text-gray-900"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` }
                                    > Github
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        
        </>
    )
}

export default Header

/* export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
} */