import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGoogle, faLinkedinIn, faTwitter, faGithub);

function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center text-center py-16 px-5 md:px-20 mt-5 bg-gray-900">

            <div className="text-gray-100 mb-4 md:mb-0 mx-20">
                <p>&copy; 2024 intezarakhtar@gmail.com | All Rights Reserved</p>
            </div>

            <div className="flex space-x-4 mx-20">
                <a
                    href="mailto:intezarakhtar@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 text-2xl hover:text-orange-600 cursor-pointer"
                >
                    <FontAwesomeIcon icon={['fab', 'google']} />
                </a>

                <a
                    href="https://www.linkedin.com/in/intezarakhtar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 text-2xl hover:text-orange-600"
                >
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>

                <a
                    href='https://x.com/intezar_akhtar'
                    target='_blank'
                    rel="noopener noreferrer"
                    className="text-gray-100 text-2xl hover:text-orange-600"
                >
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>

                <a
                    href='https://github.com/Akhtar432'
                    target='_blank'
                    rel="noopener noreferrer"
                    className="text-gray-100 text-2xl hover:text-orange-600"
                >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>

            </div>
        </div>
    );
}

export default Footer;