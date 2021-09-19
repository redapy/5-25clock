import React, { useState, createContext, useEffect } from 'react';

export const MainContext = createContext();

const MainContextProvider = props => {
    
    const [session, setSession] = useState(1500);
    const [breakk , setbreakk] = useState(300);
    const [timer, setTimer] = useState(1500);
    const [isRunning, setIsrunning] = useState(false);
    const [breakIsRunning, setBreakIsRunning] = useState(false);

    const increment = (id, num) => {
        if (id==='session') {
            if( num  >=3600 ) {
                return;
            } else{
                setSession(num+60);
                setTimer(num+60)
            }
        } else {
            if (num  >=3600) {
                return;
            } else {
                setbreakk(num+60);
            }
        }
    }

    const decrement = (id, num) => {
        if (id==='session') {
            if( num  <= 60 ) {
                return;
            } else{
                setSession(num-60);
                setTimer(num-60)
            }
        } else {
            if (num  <= 60) {
                return;
            } else {
                setbreakk(num-60);
            };
        };
    };
    

    const rest = () => {
        setIsrunning(false);
        setBreakIsRunning(false);
        resetAlaram();
        setSession(1500);
        setbreakk(300);
        setTimer(1500);

    };

    const decrementTimer = () => {
        setIsrunning(!isRunning);
    };

    const playAlaram = () => {
        const audio = document.getElementById('beep');
        audio.play()
    }
    const resetAlaram = () => {
        const audio = document.getElementById('beep');
        audio.pause();
        audio.currentTime = 0;
    }

    useEffect(() => {
    if (isRunning && timer >0){
        const countdown = setInterval(() => {
            setTimer(timer-1)
        }, 1000);

        return () => clearInterval(countdown)
    } else if (isRunning && breakIsRunning  && timer === 0) {
        setBreakIsRunning(!breakIsRunning);
        setTimer(session);
        playAlaram()
    } else if (isRunning && !breakIsRunning && timer === 0) {
        setBreakIsRunning(!breakIsRunning);
        setTimer(breakk);
        playAlaram();    
    }
    
   }, [decrementTimer])


    return ( 
        <MainContext.Provider value={{session, breakk, timer, breakIsRunning, increment, decrement, rest, decrementTimer}}>
            {props.children}
        </MainContext.Provider>
     );
}
 
export default MainContextProvider;
