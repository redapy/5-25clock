import React, { useContext, useRef } from 'react';
import { MainContext } from '../../contexts/MainContext';
import { ThemeContext } from '../../contexts/ThemContext';
import { Length, Flex, Title, Wrapper, BreakSession } from './Header.style';
 const Header = () => {
     
    
    const {session, increment, decrement, breakk} = useContext(MainContext);
    const {isLight} =  useContext(ThemeContext);
    
    const toMin = num => {
        return Math.floor(num/60);
    }

     return ( 
         <Wrapper >
             <Title>25 + 5 clock</Title>
             <Flex>
                 <BreakSession isLight={isLight}>
                     <h2 id='break-label'>Break Length</h2>
                     <Length isLight={isLight}>
                        <button onClick={() => decrement('break', breakk)} id='break-decrement'>-</button>
                        <p id='break-length'>{toMin(breakk)}</p>
                        <button onClick={() => increment('break',breakk)} id='break-increment'>+</button>
                     </Length>
                 </BreakSession>
                 <BreakSession isLight={isLight}>
                     <h2 id='session-label'>Session Length</h2>
                     <Length isLight={isLight}>
                     <button id='session-decrement' onClick={() => decrement('session',session)}>-</button>
                     <p id='session-length'>{toMin(session)}</p>
                     <button onClick={() =>increment('session',session)}  id='session-increment'>+</button>
                     </Length>
                 </BreakSession>
             </Flex>
         </Wrapper>
      );
 }
  
 export default Header;