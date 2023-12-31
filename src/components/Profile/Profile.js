import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext';
import { FaUserAlt } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div className='pt-28 lg:ps-20 sm:px-20 pb-48 ps-5'>
            <div className="max-w-md my-4 p-8 sm:flex sm:space-x-6 rounded-md bg-gray-200 text-gray-800">
                <div className="flex-shrink-0 w-full items-center h-44 sm:h-32 sm:w-32 sm:mb-0">

                    {user?.photoURL ?
                        <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                        :
                        <img src="https://i.ibb.co/HCdWcYX/avatar.jpg" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                    }

                </div>
                <div className="flex flex-col space-y-4">
                    <div className='flex flex-col'>
                        {user?.displayName ?
                            <h2 className="text-2xl font-semibold"> {user?.displayName}</h2>
                            :
                            <h2 className="text-2xl font-semibold">Name: Not available</h2>
                        }
                        <span className="text-sm text-gray-600">Jr. Web Developer</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            {user?.email ?
                                <span className="text-gray-600">{user?.email}</span>
                                :
                                <span className="text-gray-600">Email: Not available</span>
                            }
                        </span>
                        <span className="flex items-center space-x-2">
                            <FaUserAlt></FaUserAlt>
                            <p>Email Status: {' '}</p>
                            {user?.emailVerified ?
                                <span className="text-green-500 font-semibold">Verified</span>
                                :
                                <span className="text-red-600">Not Verified</span>
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;