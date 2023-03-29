import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    
    return (
        <div>
            <div>
                <p>Copyright © {year}</p>
                <p>
                    Privacy Policy
                </p>
                <p>
                    Terms and Conditions
                </p>
            </div>
        </div>
    )
}

export default Footer;

