import React, {useContext} from 'react';
import { MainContext } from '../../contexts/MainContext';
import { Control, Display, TimerWarapper } from './Timer.style';
import alarm from '../../digital-alarm.wav'
import { ThemeContext } from '../../contexts/ThemContext';


const Timer = () => {

    const {rest, timer, decrementTimer, breakIsRunning} = useContext(MainContext);
    const {isLight, toggleTheme} = useContext(ThemeContext)
    

    const toClock = (num) => {
        let min = Math.floor(num/60);
        let sec =  num%60;
        min = min<10 ? '0'+ min : min;
        sec = sec<10 ? '0'+ sec : sec; 
        return `${min}:${sec}`
    }


    return ( 
        <TimerWarapper>
            <Display isLight={isLight}>
                {breakIsRunning && <h2 id='timer-label'>Break</h2>}
                {!breakIsRunning && <h2 id='timer-label'>Session</h2>}
                <p id='time-left'>{toClock(timer)}</p>
                <audio id='beep' src={alarm} ></audio>
            </Display>
            <Control isLight={isLight}>
                <button onClick={decrementTimer} id='start_stop'><i className="far fa-play-circle"></i></button>
                <button onClick={rest} id='reset'><i className="fas fa-redo-alt"></i></button>
                <button onClick={toggleTheme}>Toggle Them</button>
            </Control>
        </TimerWarapper>
     );
}
 
export default Timer;
