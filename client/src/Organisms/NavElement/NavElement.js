import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';

import Backdrop from '../../Atoms/Modal/Backdrop';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import GoHomeStyled from '../../Atoms/NavElementStyled/GoHomeStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import GridWrapper from '../../Templates/Layout/GridWrapper';
import checkLocationForNavRender from '../../Tools/checkLocationForNavRender';
import home from '../../Assets/home.png';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import { NavElementStyled } from './NavElementStyled';
import PropTypes from 'prop-types';
import { UserDataContext } from '../../Context/UserDataContext';
import { checkPathOrigin } from '../../Tools/checkPathOrigin';
import home from '../../Assets/home.png';

const NavElement = () => {
  const locationPath = useLocation();

  const [open, setOpen] = useState(false);
  const { state } = useContext(UserDataContext);
  const { dogState } = useContext(DogContext);
  const { contestState } = useContext(ContestContext);
  const namesFromContext = {
    userName: state.userName || '',
    userSurname: state.userSurname || '',
    dogName: dogState.chosenDog.dogName || '',
    contestName: contestState.contestName || '',
  };

  const data = checkPathOrigin(locationPath.pathname, namesFromContext);
  return (
    <>
      <GridWrapper mobile="1 / 1 / 2 / 2" tablet="1 / 1 / 2 / -1" navFoot>
        <NavElementStyled>
          {checkLocationForNavRender(locationPath.pathname) ? (
            <div className="burger-wrapper" />
          ) : (
            <div className="burger-wrapper">
              <MdMenu className="burger-icon " onClick={() => setOpen(true)} />
            </div>
          )}

          <h3 className="navText">{data.text}</h3>

          <GoHomeStyled>
            <Link to="/">
              <img src={home} alt="Buda psa" className="logo" />
            </Link>
          </GoHomeStyled>
        </NavElementStyled>
      </GridWrapper>
      {data.label && data.label.length !== 0 && (
        <>
          <GreyLabel text={data.label} />
        </>
      )}
      <BurgerMenu open={open} setOpen={setOpen} />
      {open && <Backdrop />}
    </>
  );
};

NavElement.propTypes = {
  text: PropTypes.string,
};

export default NavElement;
