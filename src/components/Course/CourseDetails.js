import React, { useEffect, useState } from 'react';
import DetailsPage from './DetailsPage';

const CourseDetails = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories);

    useEffect(() => {
        fetch('https://web-technology-server-hazel.vercel.app/details')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-5 '>

            {
                categories.map(category => <DetailsPage
                    key={category.id}
                    category={category}
                ></DetailsPage>)
            }

        </div>
    );
};

export default CourseDetails;