import {NavLink} from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Theme from "../Theme/Theme";
import {HashLink} from "react-router-hash-link";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const menuRef = useRef(null); // ref for the mobile menu

    const handleNav = () => {
        setNav(!nav);
    };

    // Close the menu automatically if screen size becomes >= 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setNav(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Close the mobile menu if user clicks outside of it.
    useEffect(() => {
        const handleClickOutside = (e) => {
            // Only run this if nav is open
            if (nav && menuRef.current && !menuRef.current.contains(e.target)) {
                setNav(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [nav]);

    return (
        <div className="sticky top-0 z-50 flex items-center h-24 px-4 mx-auto backdrop-blur-sm">
            <div>
                <HashLink to="/#home" smooth className="w-full text-2xl font-bold text-black dark:text-white">
                    Alon Engel
                </HashLink>
            </div>

            <div className="ml-auto">
                <ul className="hidden md:flex text-xl">
                    {/*<li className={`p-4 hover:bg-gray-400 ${console.log("hi")}`}>*/}
                    <li className="p-4 hover:bg-gray-400">
                        <HashLink smooth to="/#home">Home</HashLink>
                    </li>
                    <li className="p-4 hover:bg-gray-400">
                        <HashLink smooth to="/#about">About</HashLink>
                    </li>
                    <li className="p-4 hover:bg-gray-400">
                        <HashLink smooth to="/#projects">Projects</HashLink>
                    </li>
                    <li className="p-4 hover:bg-gray-400">
                        <NavLink to="/blogs">Blog</NavLink>
                    </li>
                    <li className="p-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1uEqPxKvk400fRUMkIlWzEbZhludhgLX5"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
            {/*Theme Selector*/}
            <Theme className="p-2"/>

            {/* Mobile Menu Trigger - Hamburger Menu */}
            <div className="md:hidden">
                <div onClick={handleNav} className="p-4 block cursor-pointer">
                    {nav ? (
                        <AiOutlineClose className="dark:text-white text-black" size={20}/>
                    ) : (
                        <AiOutlineMenu className="dark:text-white text-black" size={20}/>
                    )}
                </div>

                {/* Mobile Menu */}
                <ul
                    ref={menuRef}
                    className={
                        nav
                            ? "fixed top-0 left-0 z-50 w-3/4 sm:w-1/2 h-screen border-r border-r-gray-500 bg-gray-300 dark:bg-gray-800 dark:border-r-gray-800 font-bold ease-in-out duration-1000 overflow-hidden"
                            : "fixed top-0 left-[-100%] z-50 w-3/4 sm:w-1/2 h-screen border-r border-r-gray-500 bg-gray-300 dark:bg-gray-800 dark:border-r-gray-800 font-bold ease-in-out duration-1000 overflow-hidden"
                    }
                >
                    <h2 className="w-full text-3xl font-bold my-6 mx-4">
                        Alon Engel
                    </h2>
                    <div>
                        <li className="p-4 border-b border-b-black dark:border-b-white">
                            <HashLink smooth to="/#home" onClick={handleNav}>Home</HashLink>
                        </li>
                        <li className="p-4 border-b border-b-black dark:border-b-white">
                            <HashLink smooth to="/#about" onClick={handleNav}>About</HashLink>
                        </li>
                        <li className="p-4 border-b border-b-black dark:border-b-white">
                            <HashLink smooth to="/#projects" onClick={handleNav}>Projects</HashLink>
                        </li>
                        <li className="p-4 border-b border-b-black dark:border-b-white">
                            <NavLink to="/blogs" onClick={handleNav}>Blog</NavLink>
                        </li>
                        <li className='p-4'>
                            <a target="_blank" rel='noopener noreferrer'
                               href="https://drive.google.com/file/d/1uEqPxKvk400fRUMkIlWzEbZhludhgLX5"
                               onClick={handleNav}>Resume</a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
