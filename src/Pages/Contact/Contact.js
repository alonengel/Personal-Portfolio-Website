import React from "react";
import {IoLogoGithub, IoLogoLinkedin, IoMailSharp} from "react-icons/io5";

const Contact = () => {
    return (
        <>
            {/* Desktop */}
            <div
                className="hidden md:flex flex-col fixed top-1/2 right-0 transform -translate-y-1/2 space-y-3 z-50"
            >
                {/* LinkedIn */}
                <div className="group relative flex items-center justify-end">
                    <a
                        href="https://www.linkedin.com/in/alon-engel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-2 bg-blue-700 text-white overflow-hidden w-[48px] hover:w-auto transition-all duration-300 group rounded-none">
                        <IoLogoLinkedin size={24} className="flex-shrink-0"/>
                        <span className="ml-2 whitespace-nowrap hidden group-hover:inline-block">
              LinkedIn
            </span>
                    </a>
                </div>

                {/* GitHub */}
                <div className="group relative flex items-center justify-end">
                    <a
                        href="https://github.com/alonengel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-2 bg-gray-800 text-white overflow-hidden w-[48px] hover:w-auto transition-all duration-300 group rounded-none">
                        <IoLogoGithub size={24} className="flex-shrink-0"/>
                        <span className="ml-2 whitespace-nowrap hidden group-hover:inline-block">
              GitHub
            </span>
                    </a>
                </div>

                {/* Email */}
                <div className="group relative flex items-center justify-end">
                    <a
                        href="mailto:info@alon.website"
                        className="
              flex items-center
              px-2 py-2
              bg-red-600 text-white
              overflow-hidden
              w-[48px]
              hover:w-auto
              transition-all duration-300
              group
              rounded-none
            "
                    >
                        <IoMailSharp size={24} className="flex-shrink-0"/>
                        <span className="ml-2 whitespace-nowrap hidden group-hover:inline-block">
              Email
            </span>
                    </a>
                </div>
            </div>

            {/* Mobile View */}
            <div
                className="
          md:hidden
          flex
          flex-row
          justify-around
          items-center
          space-x-4
          px-4
          py-2
          mt-8
          bg-gray-100 dark:bg-gray-700
          border-t border-gray-300 dark:border-gray-600
        "
            >
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/alon-engel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            flex flex-col items-center
            text-blue-700 dark:text-blue-300
          "
                >
                    <IoLogoLinkedin size={28}/>
                    <span className="text-xs mt-1">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/alonengel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            flex flex-col items-center
            text-gray-700 dark:text-gray-300
          "
                >
                    <IoLogoGithub size={28}/>
                    <span className="text-xs mt-1">GitHub</span>
                </a>

                {/* Email */}
                <a
                    href="mailto:info@alon.website"
                    className="
            flex flex-col items-center
            text-red-600 dark:text-red-400
          "
                >
                    <IoMailSharp size={28}/>
                    <span className="text-xs mt-1">Email</span>
                </a>
            </div>
        </>
    );
};

export default Contact;
