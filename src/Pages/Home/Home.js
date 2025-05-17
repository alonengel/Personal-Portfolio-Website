import Typewriter from "typewriter-effect";
// import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const HeroTitle = () => (
    <h1 className="font-bold text-4xl sm:text-5xl pt-10 mb-4">
        Hi, I'm <span className="text-blue-600">Alon</span>
    </h1>
);

const HeroTypewriter = () => (
    <div className="mb-6">
        <Typewriter
            options={{
                strings: [
                    'A Full Stack Developer',
                    'A CS Student',
                    'A Tech Savvy'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 15,
                delay: 75,
                wrapperClassName: 'font-bold text-2xl sm:text-4xl underline dark:decoration-blue-700 decoration-blue-600',
                cursorClassName: 'text-2xl sm:text-4xl'
            }}
        />
    </div>
);

const HeroDescription = () => (
    <p className="py-5 text-xl text-center max-w-[600px] text-gray-700 dark:text-gray-200">
        I'm a Full-stack developer, constantly seeking new challenges and opportunities to create innovative solutions
        and push the boundaries of what can be achieved.
    </p>
);

const HeroButton = () => (
    <div>
        <HashLink smooth
            to="#about"
            className="inline-block px-8 py-3 text-md font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition-colors duration-300"
        >
            Learn More
        </HashLink>
    </div>
);

const Home = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div
                className="max-w-[800px] mx-auto px-8 flex flex-col items-center transform -translate-y-16 md:-translate-y-20">
                <HeroTitle/>
                <HeroTypewriter/>
                <HeroDescription/>
                <HeroButton/>
            </div>
        </div>
    );
};

export default Home;
