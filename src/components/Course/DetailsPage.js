import React from 'react';
import { Link } from 'react-router-dom';

const DetailsPage = ({ category }) => {
    const { id, name, photoURL } = category;
    // console.log(category);

    return (
        <div className='w-full '>
            <div className="max-w-xs mx-auto rounded-md shadow-xl border  bg-gray-50 text-gray-800">
                <img src={photoURL} alt="" className="object-center w-full rounded-t-md h-52 bg-gray-500" />
                <div className="flex flex-col justify-between p-4 space-y-4">
                    <h2 className='text-xl font-semibold'>{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;