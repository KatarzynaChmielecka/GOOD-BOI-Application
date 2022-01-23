import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const FormWrapperStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    color: red;
    align-self: flex-start;
    font-size: 10px;
    letter-spacing: 1px;
    padding: 0 0 0 10px;
  }

  .forgot-pass {
    align-self: center;
    padding: 1em 0;
    text-decoration: none;
    ${FONTS.body_bold}
    color: ${COLORS.primary801};
  }

  .forgot-pass-text {
    padding: 0 30px 10px;
    color: ${COLORS.grey400};
  }
`;

export default FormWrapperStyled;
