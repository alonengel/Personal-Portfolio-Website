import {useContext} from "react";
import {ThemeContext} from "./ThemeToggle";
import {FaSun, FaMoon} from "react-icons/fa";

import classes from './Theme.module.css';

const Theme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <label className={classes.switch}>
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'}/>
            <span className={classes.slider}>
                <span className={classes.thumb}>
          {theme === 'dark' ? (
              <FaMoon size={16} className="text-gray-900"/>
          ) : (
              <FaSun size={16} className="text-yellow-500"/>
          )}
                </span>
             </span>
        </label>
    );
}

export default Theme;