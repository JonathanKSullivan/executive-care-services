import React from 'react';
import './ExpectationSetter.css'; // Ensure to style the component

const ExpectationSetter: React.FC = () => {
    return (
        <div className="expectation-setter">
            <h2>What to Expect</h2>
            <p>
                We value your time and strive to provide prompt and attentive service. You can expect a response from us within <strong>24 hours</strong>.
                For any urgent matters that require immediate attention, please don't hesitate to <a href="tel:+1234567890">call us directly</a>.
            </p>
        </div>
    );
};

export default ExpectationSetter;
