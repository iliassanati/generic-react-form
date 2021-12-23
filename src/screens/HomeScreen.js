import React from 'react';
import Form from '../components/Form';

const HomeScreen = (props) => {
  //Template used to generate the form input dynamically
  let template = {
    title: 'Signup application form',
    fields: [
      {
        title: 'First Name',
        type: 'text',
        name: 'firstname',
        validationProps: {
          required: 'Please enter your first name',
        },
      },
      {
        title: 'Last Name',
        type: 'text',
        name: 'lastname',
        validationProps: {
          required: 'Please enter your last name',
        },
      },
      {
        title: 'Email',
        type: 'email',
        name: 'email',
        validationProps: {
          required: 'Please enter your email',
        },
      },
      {
        title: 'Password',
        type: 'password',
        name: 'password',
        validationProps: {
          required: 'Please enter your password',
        },
      },
      {
        title: 'Include LinkedIN Profile',
        type: 'checkbox',
        name: 'linkedInProfile',
      },
      {
        title: 'LinkedIn Link',
        type: 'url',
        name: 'linkedInProfileUrl',
        dynamic: {
          field: 'linkedInProfile',
          value: true,
        },
      },
    ],
  };

  // watchFields allow to watch the change in the fields, here we use it to watch the first name and the linkedIn profile checkbox
  return (
    <Form
      template={template}
      watchFields={['firstname', 'linkedInProfile']}
      validate={validate}
      onSubmit={onSubmit}
    />
  );
};

//Submitting the form
const onSubmit = (values) => {
  console.log(values);
};

//Validate a specific form, for this example, ADMIN cannot be used as a first name
const validate = (watchValues, errorMethods) => {
  let { errors, setError, clearErrors } = errorMethods;

  //Firstname validation
  if (watchValues['firstname'] === 'ADMIN') {
    if (!errors['firstname']) {
      setError('firstname', {
        type: 'manual',
        message: "You can't use this first name",
      });
    }
  } else {
    if (errors['firstname'] && errors['firstname']['type'] === 'manual') {
      clearErrors('firstname');
    }
  }
};

export default HomeScreen;
