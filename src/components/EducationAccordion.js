import React, {useState} from "react";
import {FaChevronDown} from "react-icons/fa";

const EducationAccordion = ({title = "", items = []}) => {
    // Track which accordion item is open. (we allow only 1 to be open each time)
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-xl lg:max-w-3xl py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 text-left sm:-ml-8">{title}</h2>

            {items.map((item, index) => (
                <div key={index} className="relative pl-12 pb-8">
                    {/* Timeline segment: circle with icon + vertical line (if not last) */}
                    <div className="absolute top-2 h-full flex flex-col items-center -left-4 sm:-left-8">
                        <div
                            className="w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
                            {item.icon}
                        </div>
                        {index !== items.length - 1 && (
                            <div className="w-px bg-blue-500 dark:bg-blue-300 flex-grow mt-1 mb-2"/>
                        )}
                    </div>

                    {/* Accordion Header */}
                    <div
                        onClick={() => handleToggle(index)}
                        className="cursor-pointer bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-md transition-colors"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-600">
                                    {item.type}
                                </div>
                                <div className="text-base font-medium text-gray-800">
                                    {item.title}
                                </div>
                            </div>
                            <div className="flex items-center">
                                {item.date && (
                                    <div className="text-xs text-gray-500 mr-2">{item.date}</div>
                                )}
                                <FaChevronDown
                                    className={`text-gray-500 transition-transform duration-500 ${
                                        openIndex === index ? "rotate-180" : "animate-bounce-slow"
                                    }`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Accordion Body */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ${
                            openIndex === index ? "max-h-[400px]" : "max-h-0"
                        }`}
                    >
                        <div className="bg-gray-200 border border-gray-300 p-4 mt-2 rounded-md">
                            <p className="text-gray-700 whitespace-pre-line">
                                {item.description}
                            </p>

                            {/* If skills exist, show them */}
                            {item.skills && (
                                <p className="text-sm text-gray-600 mt-2">{item.skills}</p>
                            )}
                            
                            {/* If actionLabel & url exist, show a button that opens a new tab */}
                            {item.actionLabel && item.url && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(item.url, "_blank");
                                    }}
                                    className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                                >
                                    {item.actionLabel}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EducationAccordion;
