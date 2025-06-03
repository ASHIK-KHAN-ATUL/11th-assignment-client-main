import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useTheme from './Hooks/UseTheme';

const Navbar = ({ theme, setTheme }) => {

    const {user, logout} = useContext(AuthContext);
    const [isHover, setIsHover] = useState(false);
    const location = useLocation();
    const [dropdown, setDropdown] = useState(false)
    // console.log(dropdown)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }, [theme]);

    const links = <>
                <li> <NavLink to="/"  onClick={()=>setDropdown(false)}>Home</NavLink> </li>
                <li> <NavLink to="/all-book" onClick={()=>setDropdown(false)}>All Books</NavLink> </li>
                <li> <NavLink to="/add-book" onClick={()=>setDropdown(false)} >Add Book</NavLink> </li>
                <li> <NavLink to="/borrowed-book" onClick={()=>setDropdown(false)} >Borrowed Book</NavLink> </li>
            </>

    return (
        <div  className={`navbar bg-[#abc4ff]  sticky top-0 z-50`}>
            <div className="navbar-start">
                <div className="dropdown">
                        <div onClick={()=>setDropdown(!dropdown)}  role="button" className="btn btn-ghost lg:hidden relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul  className={` ${dropdown ? '' : 'hidden'} menu menu-sm absolute lg:hidden bg-[#abc4ff] border rounded-box z-[1]  w-52 p-2 pt-10 shadow-xl  top-10 `} onMouseLeave={() => setDropdown(false)} >{links}
                            <span onClick={()=>setDropdown(!dropdown)} className='absolute text-2xl border rounded-full h-7 w-7 bg-red-500 flex justify-center items-center top-1 right-1 hover:cursor-pointer'>
                                <p className='pb-2 text-white'>x</p>
                            </span>
                        </ul>
                </div>
                <p className=" font-bold text-base md:text-xl md:font-extrabold xl:text-3xl ">LibroHub</p>
            </div>
            <div className="navbar-center hidden  lg:flex ">
                <ul className="menu menu-horizontal  text-sm font-semibold">
                {links}
            </ul>
            </div>
            <div className='navbar-end gap-5'>

                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="btn btn-sm btn-outline border-none hover:bg-transparent text-xl "
                        >
                        {theme === "light" ? "🌙  " : "☀️ "}
                    </button>
                {
                    user ? 
                    <div className='flex items-center gap-2 relative cursor-pointer' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                        {/* Profile pic */}
                        <div className='flex items-center'>
                            <div className='h-12 w-12  rounded-full border-2 border-[#00b4d8] animate-pulse'>
                                <img className='object-cover rounded-full' src={user.photoURL} alt="Profile Pic" />
                            </div>
                        </div>
                        

                        {isHover && (
                            <div className='absolute right-0 top-12 bg-[#abc4ff] border shadow-md rounded-lg w-56 md:w-80 p-3 z-10 drop-shadow-[0_4px_6px_rgba(56,189,248,0.5)]'>
                                <div className='text-center mb-3'>
                                    <img src={user.photoURL} className='h-16 w-16 mx-auto rounded-full border-2 border-[#023e8a] '  alt="Profile pic " />
                                    <p className='mt-2 text-[10px] md:text-base font-medium text-start'>Name : {user.displayName}</p>
                                    <p className='mt-2 text-[10px] md:text-base font-medium text-start'>email : {user.email}</p>
                                    <p className='mt-2 text-[8px] md:text-sm font-medium text-start'>Last Sign In : {user.metadata.lastSignInTime}</p>
                                    <Link onClick={logout} className='btn btn-outline w-[70%] btn-error text-white mt-2 hover:scale-x-110 '>Logout</Link>
                                </div>
                            </div>
                        )}
                    </div> 
                    
                    :

                <div className='flex gap-4 items-center'>

                    {location.pathname === '/login' ? 
                    (<NavLink to={'/register'} className='btn btn-outline rounded-none btn-sm hover:bg-black text-black hover:text-white duration-500 '>Register</NavLink>) 
                    :
                    (<NavLink to={'/login'} className='btn btn-outline rounded-none btn-sm hover:bg-black text-black hover:text-white duration-500 '>Login</NavLink>)}

                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;