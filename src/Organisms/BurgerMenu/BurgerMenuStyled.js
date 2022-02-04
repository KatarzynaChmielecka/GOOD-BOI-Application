import styled from 'styled-components';

const BurgerMenuStyled = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.4s linear;
  .footer {
    display: flex;
    /* width: 233px; */
    justify-content: flex-start;
    background: ${({ theme }) => theme.white};
  }
`;

export default BurgerMenuStyled;
