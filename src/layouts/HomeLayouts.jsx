import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayouts = () => {
    return (
        <div>
            <header className='sticky top-0 z-50 '>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;