import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const StyledForgotPassForm = styled.form`
  width: 343px;
  display: flex;
  flex-direction: column;

  label {
    color: ${COLORS.grey800};
    ${FONTS.label_regular};
    align-self: flex-start;
    padding: 2em 0 3px 0;
  }

  input {
    font-family: Mulish, FontAwesome;
    color: ${COLORS.grey800};
    ${FONTS.body_semibold};
    height: 48px;
    border-radius: 8px;
    border: 0.5px solid ${COLORS.grey400};
    padding-left: 10px;
    margin: 0 0 1em 0;
  }

  input::placeholder {
    color: ${COLORS.grey400};
  }
`;

export default StyledForgotPassForm;
