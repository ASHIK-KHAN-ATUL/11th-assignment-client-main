import React from 'react';
import footerIcon from '../assets/lottie/FooterIcon.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
               <div className='bg-[#abc4ff] mt-20'>
            <footer className="py-10">
                <div className='w-48 flex items-center ml-10 justify-between'>
                    <Lottie animationData={footerIcon} />
                    <h2 className='font-bold'>LibroHub</h2>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 justify-items-center text-sm md:text-base px-5'>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Service</h6>
                        <Link to="/all-book" className="link link-hover">All Book</Link>
                        <Link to="/add-book" className="link link-hover">Add Book</Link>
                        <Link to="/borrowed-book" className="link link-hover">Borrow Book</Link>
                        <Link to="/" className="link link-hover">Book Details</Link> {/* You may want to remove or adjust this if dynamic */}
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Company</h6>
                        <Link to="/about" className="link link-hover">About us</Link>
                        <Link to="/contact" className="link link-hover">Contact</Link>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Social</h6>
                        <a className="link link-hover" href="https://x.com/ASHIKkhan693?t=nyaNtd1JYLto5DCDxLnz2g&s=09" target="_blank">Twitter</a>
                        <a className="link link-hover" href="https://www.instagram.com/ash_ik__khan/?igsh=MXVma25jaTV3b3JxMw%3D%3D#" target="_blank">Instagram</a>
                        <a className="link link-hover" href="https://www.facebook.com/atul.khan.7568596/" target="_blank">Facebook</a>
                        <a className="link link-hover" href="https://github.com/ASHIK-KHAN-ATUL/11th-assignment-client-main" target="_blank">GitHub</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Explore</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Enterprise</a>
                        <a className="link link-hover">Security</a>
                        <a className="link link-hover">Pricing</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Apps</h6>
                        <a className="link link-hover">Mac</a>
                        <a className="link link-hover">Windows</a>
                        <a className="link link-hover">iPhone</a>
                        <a className="link link-hover">Android</a>
                    </nav>
                </div>
            </footer>
            <p className='text-center pb-7 mx-5'>Copyright © {new Date().getFullYear()} - All rights reserved by LibroHub</p>
        </div>
    );
};

export default Footer;