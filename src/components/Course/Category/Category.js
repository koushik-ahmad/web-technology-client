import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const details = useLoaderData();

    const { id, name, photoURL, description } = details;
    // console.log(details);

    return (
        <div className=' pb-10'>
            <div className="max-w-4xl p-4 border-2 rounded-md text-gray-800">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={photoURL} alt="" className="block object-center w-full rounded-md h-96 bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <Link rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-2xl font-semibold text-violet-600">{name}</h3>
                        </Link>
                        <p className="leadi text-gray-600">{description}</p>
                        <div className='pt-4 flex gap-8 pb-4'>
                            <button type="button" className="px-4 py-2 flex items-center gap-3 font-semibold rounded bg-blue-600 text-gray-100">
                                <FaDownload />  Download
                            </button>
                            <Link to={`/checkout/${id}`}>
                                <button type="button" className="px-4 py-2 flex items-center gap-2 font-semibold rounded bg-blue-600 text-gray-100">
                                    Get Premium Access
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;