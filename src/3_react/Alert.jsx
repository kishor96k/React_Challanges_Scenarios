import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            // Fix: Call removeAlert without any arguments
            removeAlert();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [list]);

    return (
        <>
            <p>{msg}</p>
        </>
    );
};

export default Alert;
