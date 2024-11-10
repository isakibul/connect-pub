import React from 'react';

const ThankYouPage = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Thank you for completing your registration!</h1>
            <p>Please check your email for an invite to the <strong>Muslims in Tech Slack group</strong>. Make sure to check your spam too. <br /> See you there!</p>
            <a href="https://www.muslimsintech.org/">
                <button className='btn' style={{ width: '200px' }}>Back to our Home</button>
            </a>
        </div>
    );
};

export default ThankYouPage;