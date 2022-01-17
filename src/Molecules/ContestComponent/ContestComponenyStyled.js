import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const ContestComponentStyled = styled.div`
  box-sizing: border-box;
  padding: 1.25rem 1.25rem 1.375rem 1.25rem;
  margin: auto;
  width: calc(100% - 2rem);
  height: auto;
  background: ${(isClicked) => {
    isClicked ? COLORS.positive100 : COLORS.white;
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid 0.5px ${COLORS.grey200};
  border-radius: 0.75rem;
`;

const ContestInsideElementStyled = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgrey;
  ${FONTS.label_extrabold}
  color: ${COLORS.grey400}
`;

const ContestNameStyled = styled.h3`
  ${FONTS.h3};
  color: ${COLORS.grey800};
`;

export {
  ContestComponentStyled,
  ContestInsideElementStyled,
  ContestNameStyled,
};
