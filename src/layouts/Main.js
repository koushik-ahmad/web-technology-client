import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import CourseName from '../components/Course/CourseName';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-2 lg:px-20 md:px-10 px-5">
                <div className="gap-2">
                    <CourseName></CourseName>
                </div>
                <div className="lg:col-span-2">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;