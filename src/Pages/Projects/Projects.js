import React from "react";
import {Link} from "react-router-dom";

const Projects = ({projects}) => {
    return (
        <div className="px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold inline-block border-b-4 border-blue-600 mb-6">Projects</h2>
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div key={index}
                             className="flex flex-col md:flex-row items-stretch bg-gray-200 border border-gray-200 dark:border-gray-300 rounded-lg shadow-lg overflow-hidden">
                            {/* Image*/}
                            {project.displayImage && (
                                <div className="w-full md:w-48 h-60 flex-shrink-0">
                                    <img
                                        src={project.displayImage}
                                        alt={project.title}
                                        className="w-full h-full object-contain md:object-cover"
                                    />
                                </div>
                            )}
                            {/* Details Section*/}
                            {/*Title, type, description*/}
                            <div className="flex-1 p-4 md:px-8">
                                <h3 className="text-xl font-bold mb-1 text-black">{project.title}</h3>
                                {project.type && (
                                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                                        {project.type}
                                    </p>
                                )}
                                <p className="text-gray-700 dark:text-gray-700 mb-2 whitespace-pre-line">
                                    {project.description}
                                </p>

                                {/* Links */}
                                {project.links && project.links.length > 0 && (
                                    <div className="mb-2">
                                        {project.links.map(([label, url], idx) => (
                                            <a
                                                key={idx}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 dark:text-blue-600 underline mr-4"
                                            >
                                                {label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                                {/* Tech Stack */}
                                {project.tech && project.tech.length > 0 && (
                                    <div className="mb-2">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx}
                                                  className="inline-block bg-blue-500 dark:bg-blue-5900 text-white dark:text-blue-100 text-xs px-2 py-1 rounded-full mr-2 mb-2">{tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* "Learn More" Button */}
                                {project.caseStudy && (
                                    <div className="mt-2">
                                        <Link to={`/projects/${index}`}
                                              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">Learn
                                            More</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
