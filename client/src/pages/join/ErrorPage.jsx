import React from 'react';

const ErrorPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h1 style={{ margin: '0' }}>Oops! Something went wrong.</h1>
            <p style={{ marginLeft: '7px', marginRight: '7px' }}>We are sorry for the temporary failure. Please try again later.</p>
            <a href="https://www.muslimsintech.org/">
                <button className='btn' style={{ width: '200px' }}>Back to our Home</button>
            </a>
        </div>
    );
};

export default ErrorPage;