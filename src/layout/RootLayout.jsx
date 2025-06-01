import React from 'react';
import Navbar from '../pages/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
           <div className='min-h-screen'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;