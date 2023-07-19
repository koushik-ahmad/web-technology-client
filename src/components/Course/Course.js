import React from 'react';
import CourseDetails from './CourseDetails';

const Course = () => {

    return (
        <div className='py-10'>
            <div className="gap-4 lg:grid-cols-3 lg:gap-2">
                <div className="lg:col-span-2">
                    <CourseDetails></CourseDetails>
                </div>
            </div>
        </div>
    );
};

export default Course;