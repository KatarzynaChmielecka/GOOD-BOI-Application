import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainButton from '../../Atoms/MainButton/MainButton';
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import CheckboxAgreeField from '../../Atoms/CheckboxAgreeField/CheckboxAgreeField';
import TextArea from '../../Atoms/TextArea/TextArea';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const initialState = {
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  // const form = useRef();
  const submitHandler = (event) => {
    // event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    const data = { ...formData };

    //test, after submit, entered user data
    console.log(data);
    navigate('/landing');

    // event.preventDefault();

    emailjs
      .sendForm(
        'service_z1iu8bd',
        'contact_form',
        event.target,
        'user_pR6XzZUshqc9XuxuBLUzf',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <CardWrapper>
      <FormWrapper onSubmit={submitHandler}>
        <InputField
          labelText="Email"
          htmlFor="email"
          type="email"
          placeholder="&#xf0e0; Email"
          id="email"
          name="email"
          required
          value={setFormData.email}
          onChange={handleInputChange}
        />
        <TextArea
          labelText="Wpisz wiadomość"
          htmlFor="message"
          id="message"
          name="message"
          required
          value={setFormData.message}
          onChange={handleInputChange}
          placeholder="Wpisz wiadomość"
        />
        <CheckboxAgreeField text="Zapoznałem się z regulaminem GOOD BOI i akceptuję jego postanowienia" />
        <MainButton primary text="Wyślij wiadomość" />
      </FormWrapper>
    </CardWrapper>
  );
};

export default ContactForm;
