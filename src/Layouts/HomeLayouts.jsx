import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import useTheme from '../Components/Hooks/UseTheme';

const HomeLayouts = () => {

    // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    // useEffect(() => {
    //     document.documentElement.setAttribute("data-theme", theme);
    //     localStorage.setItem("theme", theme);
    // }, [theme]);

    const [theme, setTheme] = useTheme();

    return (
        <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'text-white' : ' text-black'}`}>
            <Navbar theme={theme} setTheme={setTheme}></Navbar>
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;