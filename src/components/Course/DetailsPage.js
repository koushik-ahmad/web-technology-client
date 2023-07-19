import React from 'react';
import { Link } from 'react-router-dom';

const DetailsPage = ({ category }) => {
    const { id, name, photoURL } = category;
    // console.log(category);

    return (
        <div className='px-28 lg:p-0 md:p-0'>
            <div className="max-w-md rounded-md shadow-xl border bg-gray-50 text-gray-800">
                <img src={photoURL} alt="" className="object-center w-full rounded-t-md h-56 bg-gray-500" />
                <div className="flex flex-col justify-between p-4 space-y-4">
                    <h2 className='text-xl font-semibold'>{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;