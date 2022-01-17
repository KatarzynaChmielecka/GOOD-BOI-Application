import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PriSecBtn from '../../Atoms/PriSecBtn/PriSecBtn';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import RegistrationPageStyled from './RegistrationPageStyled';
import InputField from '../../Molecules/InputField/InputField';
import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = { name, surname, email, password };

    //test, after submit, entered user data
    console.log(data);
    navigate('/login');
  };

  return (
    <CardWrapper>
      <RegistrationPageStyled onSubmit={submitHandler}>
        <InputField
          labelText="Email"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <InputField
          labelText="Password"
          htmlFor="password"
          type="password"
          id="password"
          placeholder="&#xf023; Hasło"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <InputField
          labelText="Imię"
          htmlFor="name"
          type="text"
          placeholder="&#xF007; Imię"
          id="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <InputField
          labelText="Nazwisko"
          htmlFor="surname"
          type="text"
          placeholder="&#xF007; Nazwisko"
          id="surname"
          required
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <CheckboxAgreeField text="Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia" />
        <PriSecBtn text="Zarejestruj się" />
      </RegistrationPageStyled>
    </CardWrapper>
  );
};

export default RegistrationPage;
