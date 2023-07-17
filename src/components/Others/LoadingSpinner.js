import { Spinner } from 'flowbite-react';
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="text-center pt-40 pb-72">
            <Spinner
                aria-label="Extra large Center-aligned spinner example"
                size="xl"
            />
        </div>
    );
};

export default LoadingSpinner;