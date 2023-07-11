import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <div className="text-center pb-24">
                <h1 className="font-black text-gray-200 text-9xl">404</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                    Not found !
                </p>

                <p className="text-xl mt-4 text-gray-500">Sorry, we couldn't find this page.</p>

                <Link
                    to='/'
                    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;