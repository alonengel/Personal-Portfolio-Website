import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import BackToTop from "./components/BackToTop";
import {Helmet} from 'react-helmet-async';

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";

import {projects} from "./content/data";
// import ProjectDetails from "./Pages/Projects/ProjectDetails";
import BlogDetails from "./Pages/Blog/BlogDetails";

function NotFound() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Helmet>
                <title>Alon's Website</title>
                <meta
                    name="description"
                    content="Welcome to Alon's Website. Explore the Home, About, Projects, and Contact sections all on one page. Connect with me on LinkedIn (https://www.linkedin.com/in/alon-engel/), GitHub (https://github.com/alonengel), or via Email (mailto:info@alon.website)."
                />
                {/*Facebook/Opengraph meta*/}
                <meta property="og:title" content="Alon's Website" />
                <meta property="og:description" content="Explore my Home, About, Projects, and Contact sections all on one page." />
                <meta property="og:type" content="website"/>
            </Helmet>


            <div className="relative">
                <div
                    className="bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 from-gray-50 to-gray-100 dark:text-white transition-all duration-1000 min-h-screen">
                    <Navbar/>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <main>
                                    <section id="home" className="scroll-mt-24">
                                        <Home/>
                                    </section>
                                    <section id="about" className="scroll-mt-24">
                                        <About/>
                                    </section>
                                    <section id="projects" className="scroll-mt-24">
                                        <Projects projects={projects}/>
                                    </section>
                                    <section id="contact" className="scroll-mt-24">
                                        <Contact/>
                                    </section>
                                </main>
                            }
                        />
                        <Route path="/blogs" element={<Blog/>}/>
                        <Route path="/blog/:path" element={<BlogDetails/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>

                <BackToTop/>
            </div>
        </BrowserRouter>
    );
}

export default App;
