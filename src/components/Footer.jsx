import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-10 mt-16'>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left'>
                {/* {about} */}
                <div>
                    <h3 className='text-xl font-semibold mb-3'>Recipe</h3>
                    <p className='text-sm text-gray-300'>
                        One Stop platform for discovering amazing Recipe . Stay connected
                    </p>
                </div>
                {/* {link} */}
               <div>
                <h3 className='text-xl font-semibold text-white mb-2'>Contact</h3>
                <p>Email: <a href="" className='Hover:text-orange-500'>recipe@gmail.com</a> </p>
                <p>Phone:<a href="" className='Hover:text-orange-500'>+1 (234) 567-890</a> </p>
                <p>Location: Dhaka,BAngladesh</p>
               </div>
                {/* {Social Media} */}
                <div>
                    <h4 className='text-lg font-semibold mb-3'>Follow us</h4>
                    <div className='flex justify-center md:justify-start gap-4 text-xl'>
                        <a  href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><FaFacebook></FaFacebook></a>
                        <a href="https://x.com/" target='_blank' rel="noopener noreferrer"><FaX></FaX></a>
                        <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
            </div>
            <p className='text-center text-xs text-gray-500 mt-10'>
            ©️{new Date().getFullYear()} EventExplorer . All right reserved
            </p>
        </footer>
    );
};

export default Footer;