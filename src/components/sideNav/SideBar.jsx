import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EDDarkMode } from '../../contexts/DarkModeTheme';
import { FaApple  } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiStopwatch } from "react-icons/ci";
import { SiTesla } from "react-icons/si";
const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const usersList = JSON.parse(localStorage.getItem("users")) || [];
    console.log(usersList, '//')

    const { DarkModeEB } = useContext(EDDarkMode)
    return (
        <>
            <div className="flex h-screen">
                <div
                    className={` ${DarkModeEB ? 'bg-slate-800' : 'bg-[#115E8D]'} w-64 py-6 px-4 ${isSidebarOpen ? 'block' : 'hidden sm:block'} overflow-y-auto`}
                >
                    {
                        usersList.map((name, index) => {
                            return (
                                <div key={index} className="text-white text-2xl font-semibold uppercase border-b border-gray-700 py-4">
                                    Hi,  {name.fName}
                                </div>
                            )
                        })
                    }

                    <ul className="mt-6">
                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                                to="/"
                            >
                                <span className="ml-4 text-white flex items-center gap-3"><CiStopwatch   /> Top News</span>

                            </Link>
                        </li>
                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                                to="/globalNews"
                            >
                                <span className="ml-4 text-white flex items-center gap-3"><AiOutlineGlobal  /> Global News</span>

                            </Link>
                        </li>
                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                                to="/appleNews"
                            >
                                <span className="ml-4 text-white flex items-center gap-3"><FaApple /> Apple News</span>
                            </Link>
                        </li>
                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                                to="/teslaNewsA"
                            >
                                <span className="ml-4 text-white flex items-center gap-3"><SiTesla  /> Tesla News</span>
                            </Link>
                        </li>
                    </ul>
                    <div className='fixed bottom-0 mb-5'>
                        <div className='text-white'>Developed by, Tushar</div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="sm:hidden">
                        <button
                            id="sidebarToggle"
                            className="text-gray-500 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                            onClick={toggleSidebar}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* <div className="bg-white p-6">
            <h1 className="text-2xl font-semibold text-gray-800 text-center">
              Responsive Sidebar Example
            </h1>
            <p className="mt-2 text-gray-600"> </p>
          </div> */}
                </div>
            </div>

        </>
        // <div className={`bg-gray-800 w-64 py-6 px-4 ${isSidebarOpen ? 'block' : 'hidden sm:block'} overflow-y-auto`}>
        //     <div className="text-white text-2xl font-semibold uppercase border-b border-gray-700 py-4">
        //         News App
        //     </div>
        //     <ul className="mt-6">
        //         <li className="relative px-6 py-3">
        //             <Link to="/" className="text-white inline-flex items-center w-full  font-semibold transition-colors duration-150 ">
        //                 <span className=''><IoHomeOutline /></span>
        //                 <span className="ml-4 ">Top Head Lines</span>
        //             </Link>
        //         </li>
        //         <li className="relative px-6 py-3">
        //             <Link to="/about" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
        //                 <span className="ml-4 text-white">About</span>
        //             </Link>
        //         </li>
        //     </ul>
        //     <div className="sm:hidden">
        //         <button
        //             id="sidebarToggle"
        //             className="text-red-500 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        //             onClick={toggleSidebar} // Fixed onClick handler here
        //         >
        //             <svg
        //                 className="h-6 w-6"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 stroke="currentColor"
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth="2"
        //                     d="M4 6h16M4 12h16M4 18h16"
        //                 ></path>
        //             </svg>
        //         </button>
        //     </div>
        // </div>
    );
}

export default Sidebar;
