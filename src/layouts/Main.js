import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import CourseName from '../components/Course/CourseName';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-2xl mx-auto">
                <div className='lg:flex md:flex'>
                    <div className="lg:w-1/4 md:w-1/4 sm:w-full hidden lg:block md:block">
                        <CourseName></CourseName>
                    </div>
                    <div className="lg:w-3/4 md:w-3/4 sm:w-full ">
                        <Outlet></Outlet>
                    </div>
               </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;