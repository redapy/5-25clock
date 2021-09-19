import styled, {css} from "styled-components";

export const Wrapper = styled.div`
min-width: 40%;
min-height: 40%;
display: flex;
flex-direction: column;
justify-content:center;
margin: 0 auto;

`;

export const Flex = styled.div`
display: flex;
justify-content: space-around;
@media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}

`;

export const Title = styled.h1`
margin: 0 auto;
height: 20%;
`;

export const BreakSession = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
h2 {
    color: ${props => props.isLight ? 'var(--buttonLight)' : 'var(--textDark)' };
}
`;


export const Length = styled.div`
display: flex;
justify-content: center;
* {
    margin: 6px 0;
}
button {
    padding: 4px;
    border:1px solide black;
    margin:2px;
    font-size:20px;
    background: ${props => props.isLight ? 'var(--timerLight)' : 'var(--timerDark)'};
    color: ${props => props.isLight ? 'var(--buttonLight)' : 'var(--textDark)' };

}
p {
    font-size: 20px;
    margin: 6px 2px;  
}
`;