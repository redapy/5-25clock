import React, { useContext }  from 'react';
import { ClockWrapper } from './Clock.style';
import Header from "./components/header/Header";
import Timer from "./components/timer/Timer";
import { ThemeContext } from './contexts/ThemContext';


const Clock = () => {
    const {isLight} =  useContext(ThemeContext);
    return ( 
        <ClockWrapper isLight={isLight}>
            <Header />
            <Timer />
        </ClockWrapper>
     );
}
 
export default Clock;
