import {useState, useEffect} from "react";
import {FaChevronUp} from "react-icons/fa";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show the button when scrolled down.
        const toggleVisibility = () => {
            window.scrollY > 0 ? setVisible(true) : setVisible(false); //Support for older and newer browsers (since pageYOffset is deprecated) - bug fix.
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    //Scroll back to the top of the page.
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <div className="fixed bottom-4 right-4 z-50">
                <button onClick={scrollToTop}
                        className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
                    <FaChevronUp size={20}/>
                </button>
            </div>
        )
    );
};

export default BackToTop;
