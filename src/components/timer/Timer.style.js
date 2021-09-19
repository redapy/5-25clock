import styled from "styled-components";

export const TimerWarapper = styled.div`
min-width: 300px;
min-height: 30%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 0 auto;
padding: 1em;
`

export const Display = styled.div`
width: 100%;
min-height: 70%;
display: flex;
flex-direction: column;
justify-content: center;
border: 5px ${props => props.isLight ? 'var(--timerLight)' : 'var(--textDark)' } solid;
border-radius: 30%;
align-items: center;
 p {
     font-size: 60px;
     font-weight: 20px;
     color: ${props => props.isLight ? 'var(--buttonLight)' : 'var(--textDark)' };
 }
`;

export const Control = styled.div`
min-width: 10%;
margin-top: 1em;
display: flex;
justify-content: space-between;

button {
    padding: 10px;
    background: ${props => props.isLight ? 'var(--timerLight)' : 'var(--timerDark)'};
    color: ${props => props.isLight ? 'var(--buttonLight)' : 'var(--textDark)' };
   

}
`;



