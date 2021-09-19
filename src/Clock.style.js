import styled from "styled-components";

export const ClockWrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
height: 100vh;
background: ${props => props.isLight ? 'var(--lightBackground)' : 'var(--darkBackground)'};
`;