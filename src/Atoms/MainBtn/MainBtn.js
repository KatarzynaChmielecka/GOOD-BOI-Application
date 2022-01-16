import propTypes from 'prop-types';
import MainBtnStyled from './MainBtnStyled';

// function primary, secondary, trinary
const MainBtn = (props) => {
  const { primary, secondary, ternary, text } = props;
  function doOnClick() {
    return console.log('Main button clicked');
  }
  return (
    <MainBtnStyled
      onClick={doOnClick}
      primary={primary}
      secondary={secondary}
      ternary={ternary}
    >
      {text}
    </MainBtnStyled>
  );
};

MainBtn.propTypes = {
  primary: propTypes.string,
  secondary: propTypes.string,
  ternary: propTypes.string,
  text: propTypes.string,
};

export default MainBtn;
