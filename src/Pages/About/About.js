import React, {useState} from "react";
import EducationAccordion from "../../components/EducationAccordion";
import {certifications, education, experience} from "../../content/data.js";

const About = () => {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <div className="mx-auto px-8 max-w-xl lg:max-w-3xl min-h-screen">
            {/*About Section*/}
            <h1 className="text-4xl font-bold inline-block border-b-4 border-blue-600 mb-2">
                About
            </h1>
            <section className="mb-16 text-lg leading-relaxed">
                Hi, I’m Alon Engel. I've always been fascinated by how technology works—whether it's taking gadgets
                apart as a kid or discovering the best hardware to build a PC and writing code as an adult.
                <br/><br/>
                I love tackling challenges and learning new things—whether it's web scraping to find the best hardware
                deals or diving into advanced backend systems. I'm always eager for the next opportunity to learn and
                grow.
            </section>
            {/*Education/Exprience Section*/}
            <section>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => setActiveTab("education")}
                        className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer shadow-md hover:shadow-lg focus:outline-none ${
                            activeTab === "education" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}>
                        Education
                    </button>
                    <button
                        onClick={() => setActiveTab("experience")}
                        className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer shadow-md hover:shadow-lg focus:outline-none ${
                            activeTab === "experience" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}>
                        Work Experience
                    </button>
                </div>
                {activeTab === "education" && (
                    <>
                        <EducationAccordion title="My Education" items={education}/>
                        <EducationAccordion title="My Certifications" items={certifications}/>
                    </>
                )}
                {activeTab === "experience" && (
                    <EducationAccordion title="My Work Experience" items={experience}/>
                )}
            </section>
        </div>
    );
};

export default About;
