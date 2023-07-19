import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseName = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories);

    useEffect(() => {
        fetch('https://web-technology-server-hazel.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='p-5 pb-10 ps-10'>
            <h2 className='text-xl pb-8'>All Category: {categories.length}</h2>
            <div className='text-lg underline text-blue-500 space-y-6 '>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>
                            {category.name}
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default CourseName;