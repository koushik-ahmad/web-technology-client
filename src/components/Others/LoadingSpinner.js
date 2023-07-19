import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className="text-center p-40">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    );
};

export default LoadingSpinner;