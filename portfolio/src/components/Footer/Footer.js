import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle, faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGoogle, faLinkedinIn, faTwitter, faGithub);

function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center text-center py-16 px-5 md:px-20 mt-5 bg-gray-900">
            {/* Contact Information */}
            <div className="text-gray-100 mb-4 md:mb-0 mx-20">
                <p>&copy; 2024 intezarakhtar@gmail.com | All Rights Reserved</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mx-20">
                <FontAwesomeIcon icon={['fab', 'google']} className="text-gray-100 text-2xl hover:text-gray-400" />
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="text-gray-100 text-2xl hover:text-gray-400" />
                <FontAwesomeIcon icon={['fab', 'twitter']} className="text-gray-100 text-2xl hover:text-gray-400" />
                <FontAwesomeIcon icon={['fab', 'github']} className="text-gray-100 text-2xl hover:text-gray-400" />
            </div>
        </div>
    );
}

export default Footer;
