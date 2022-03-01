import propTypes from 'prop-types';
import styled from 'styled-components';
import { useContext, useEffect } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import {
  CONTEST_ACTIONS,
  DOG_ACTIONS,
  USER_ACTIONS,
} from '../../Consts/reducersActions';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';

const TestWrapperStyled = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
`;

const ProfilePage = () => {
  const { contestState, contestDispatch } = useContext(ContestContext);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { state, dispatch } = useContext(UserDataContext);
  const { userId } = state;

  useEffect(() => {
    if (contestState.contestId || contestState.contestName) {
      contestDispatch({ type: CONTEST_ACTIONS.CLEAR });
    }
    if (dogState.chosenDog) {
      dogDispatch({ type: DOG_ACTIONS.CLEAR_CHOSEN_DOG });
    }
    if (state.selectedRole !== ROLE_NAME.PARTICIPANT) {
      dispatch({
        type: USER_ACTIONS.SELECT_ROLE,
        selectedRole: ROLE_NAME.PARTICIPANT,
      });
    }
  }, []);

  return (
    <ColumnWrapper
      paddingLeftRight={1}
      desktop="grid-area: 2 / 2 / 8 / 12"
      mobile="grid-area: 4 / 1 / 2 / 2"
      className="user_profile"
    >
      <ProfileCard className="user_profile" />
      {/* <TestWrapperStyled> */}
      <FakeButton
        to="/user-dogs"
        text="Twoje Psy"
        paragraphText="Lista Psów przypisanych do Twojego konta. Zarejestruj je w systemie, żeby szybciej zgłaszać się na zawody."
        colors="ternary"
        className={['user_profile', 'user_dogs']}
      />
      <FakeButton
        to={`/contests`}
        state={{
          contestContent: 'results',
        }}
        text="Twoje Zawody"
        paragraphText="Konkursy w których brałeś udział lub zapisz się na nadchodzące zawody, korzystając z wygodnego formularza."
        colors="ternary"
        className={['user_profile', 'user_contests']}
      />
      <FakeButton
        to={`/user/${userId}/user-data`}
        text="Twoje Dane"
        paragraphText="Tu możesz edytować swoje dane imienne i adresowe, a także email i hasło."
        colors="ternary"
        className={['user_profile', 'user_data']}
      />
      <FakeButton
        to={'/contests'}
        state={{
          contestContent: 'future',
        }}
        text="Nadchodzące Zawody"
        paragraphText="Przejdź do formularza zapisu na zawody."
        colors="secondary"
        className={['user_profile', 'user_upcoming']}
      />
      {/* </TestWrapperStyled> */}
    </ColumnWrapper>
  );
};

ProfilePage.propTypes = {
  userId: propTypes.string,
};

export default ProfilePage;
