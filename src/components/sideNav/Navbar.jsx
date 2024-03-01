import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EDDarkMode } from '../../contexts/DarkModeTheme';
import darkIcon from '../../assets/dark-mode.png'
import lightIcon from '../../assets/light-mode.png'
import { LuLogOut } from "react-icons/lu";

let openIcon = <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
let crossIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" id="Cross"><path d="M70.7 64.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3L46 52.4 27.7 70.7c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.8-1.8-1.8-4.6 0-6.4L39.6 46 21.3 27.7c-1.8-1.8-1.8-4.6 0-6.4 1.8-1.8 4.6-1.8 6.4 0L46 39.6l18.3-18.3c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4L52.4 46l18.3 18.3z" fill="#34a853" class="color000000 svgShape"></path></svg>


const Navbar = () => {

    const { DarkModeEB,
        darkModeButton } = useContext(EDDarkMode)

    const usersList = JSON.parse(localStorage.getItem("users")) || [];
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const Navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('loggedin');
        Navigate('/login')
    }

    console.log(DarkModeEB, 'll')

    return (
        <div>
            <nav className={`flex items-center justify-between flex-wrap ${DarkModeEB ? 'bg-slate-900' : 'bg-[#1E3C39]'}  p-6 fixed top-0 w-full`}>
                <div className="flex items-center flex-shrink-0 text-white mr-6 gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                        <g fill="#205798" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ "mixBlendMode": "normal" }}><g transform="scale(5.12,5.12)"><path d="M1.71875,2.78125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v35.6875c0,4.24609 2.20703,6.64063 4.375,7.71875c2.16797,1.07813 4.3125,1.03125 4.3125,1.03125h30.75v-0.09375c0.48047,0.05469 1,0.09375 1,0.09375c0,0 1.92188,0.01172 3.84375,-1.09375c1.875,-1.07812 3.72266,-3.35937 3.8125,-7.3125c0.01172,-0.01953 0.02344,-0.04297 0.03125,-0.0625c0,-0.02344 0,-0.03906 0,-0.0625c0.00391,-0.05078 0.00391,-0.10547 0,-0.15625v-25.09375c0,-0.01172 0,-0.01953 0,-0.03125c0,0 0.01563,-1.17187 -0.59375,-2.375c-0.60937,-1.20312 -2.02734,-2.5 -4.25,-2.5v-0.03125h-9.46875v2h5.5625c-0.12109,0.17188 -0.22266,0.32813 -0.3125,0.5c-0.60937,1.19141 -0.625,2.375 -0.625,2.375v24.25c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-24.25c0,-0.02734 0.03906,-0.75 0.40625,-1.46875c0.375,-0.73047 0.90234,-1.375 2.4375,-1.375c1.53125,0 2.05859,0.66016 2.4375,1.40625c0.37109,0.73438 0.4375,1.47266 0.4375,1.5h-0.03125v25.09375c0,3.55859 -1.42187,5.05859 -2.84375,5.875c-1.42187,0.81641 -2.84375,0.8125 -2.84375,0.8125c0,0 -1.69141,-0.02344 -3.375,-0.875c-1.68359,-0.85156 -3.3125,-2.34766 -3.3125,-5.875v-35.6875c0,-0.55078 -0.44922,-1 -1,-1h-31.75c-0.07422,-0.00781 -0.14453,-0.00781 -0.21875,0zM2.9375,4.78125h29.75v34.6875c0,3.28906 1.39453,5.44141 3.03125,6.75h-26.09375c-0.01172,0 -0.01953,0 -0.03125,0c0,0 -0.42969,0.00391 -1.0625,-0.09375c-0.31641,-0.05078 -0.66797,-0.13281 -1.0625,-0.25c-0.39453,-0.11719 -0.83203,-0.26172 -1.25,-0.46875c-0.21094,-0.10547 -0.42187,-0.21484 -0.625,-0.34375c-1.42969,-0.89844 -2.65625,-2.44922 -2.65625,-5.59375zM6.9375,11c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h19.71875c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-19.71875c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM6.9375,15c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h19.71875c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-19.71875c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM7.40625,23c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6.78125c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6.78125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM18.9375,23c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h7.71875c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-7.71875c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM7.40625,27c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6.78125c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6.78125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM18.9375,27c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h7.71875c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-7.71875c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM18.9375,30.78125c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h7.71875c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-7.71875c-0.0625,-0.00781 -0.125,-0.00781 -0.1875,0c-0.03125,0 -0.0625,0 -0.09375,0zM7.40625,31c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6.78125c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6.78125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM18.9375,34.78125c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h7.71875c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-7.71875c-0.0625,-0.00781 -0.125,-0.00781 -0.1875,0c-0.03125,0 -0.0625,0 -0.09375,0zM7.40625,35c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6.78125c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6.78125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM18.9375,38.53125c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h7.71875c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-7.71875c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM7.40625,39c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6.78125c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6.78125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0z"></path></g></g>
                    </svg>
                    <div onClick={() => Navigate('/')} className="font-semibold cursor-pointer text-xl tracking-tight flex gap-3"><span >Welcome</span> <span>
                        {
                            usersList ? usersList.map((name, index) => {
                                return (
                                    <div key={index} className='text-red-400'>
                                        {name.fName}
                                    </div>
                                )
                            }) : 'Loading'
                        }
                    </span></div>
                </div>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        {/* {isOpen ? openIcon : crossIcon} */}
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>

                    </button>
                </div>
                <div className={`w-full ${isOpen ? 'block' : 'hidden'} lg:text-center lg:block flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">
                        {/* <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Docs
                        </Link> */}

                    </div>
                    <button onClick={darkModeButton}>
                        {DarkModeEB ? <img className='w-[40px] mr-5' src={lightIcon} alt="" /> : <img className='w-[40px] mr-5' src={darkIcon} alt="" />}
                    </button>
                    <button onClick={handleLogout} className="flex gap-4 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-red-400 mt-4 lg:mt-0">
                        Logout <LuLogOut />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;