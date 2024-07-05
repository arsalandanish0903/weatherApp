import React from 'react';

const ErrorData = ({ message }) => {
    return (
        <div className="w-full max-w-md p-4 md:p-10 bg-red-600 text-white shadow-lg rounded-lg my-5 mx-auto">
            <p className="text-lg md:text-xl font-bold">Error: {message}</p>
        </div>
    );
};

export default ErrorData;
