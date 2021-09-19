import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [isLight, setIsLight] = useState(true)
    
    const toggleTheme = () => {
        setIsLight(!isLight)
    }


    return ( 
        <ThemeContext.Provider value= {{isLight, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;
