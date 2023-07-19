import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Course from '../components/Course/Course';
import Faq from '../components/Faq/Faq';
import Blog from '../components/Blog/Blog';
import Login from '../components/Register/Login';
import Signup from '../components/Register/Signup';
import Profile from '../components/Profile/Profile';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Category from '../components/Course/Category/Category';
import Checkout from '../components/Course/Checkout/Checkout';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Course></Course>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://web-technology-server-hazel.vercel.app/details/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://web-technology-server-hazel.vercel.app/details/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
]);

export default router;