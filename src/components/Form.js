import React from 'react';
import { useForm } from 'react-hook-form';
import { MenuItem } from 'react-pro-sidebar';
import SideBar from './SideBar';

// Reusable Form Component
const Form = ({ template, onSubmit, watchFields, validate }) => {
  //props provided by useForm to handle events in the form
  let { register, handleSubmit, errors, watch, setError, clearErrors } =
    useForm();

  //the data that is changing dynamically
  let { title, fields } = template;

  //watch the change of the values
  let watchValues = watch(watchFields);
  validate(watchValues, { errors, setError, clearErrors });

  // array to accumalte the errors
  var errs = [];

  /* To render the fields */
  const renderFields = (fields) => {
    //extract the props from each field in the template
    return fields.map((field) => {
      let { title, type, name, validationProps, dynamic } = field;

      // allow to show the url field if the checkbox value is true
      let showField = dynamic
        ? watchValues[dynamic['field']] === dynamic['value']
        : true;
      if (!showField) return;

      // Match the type field with the types that the form provides
      switch (type) {
        case 'text':
          return (
            <div key={name}>
              <label htmlFor={name}>{title}</label>
              <input
                type='text'
                name={name}
                id={name}
                ref={register(validationProps)}
              />
              {errors[name] && errs.push(errors[name])}
            </div>
          );
        case 'email':
          return (
            <div key={name}>
              <label htmlFor={name}>{title}</label>
              <input
                type='email'
                name={name}
                id={name}
                ref={register(validationProps)}
              />
              {errors[name] && errs.push(errors[name])}
            </div>
          );

        case 'password':
          return (
            <div key={name}>
              <label htmlFor={name}>{title}</label>
              <input
                type='password'
                name={name}
                id={name}
                ref={register(validationProps)}
              />
              {errors[name] && errs.push(errors[name])}
            </div>
          );

        case 'checkbox':
          return (
            <div key='name'>
              <label>
                <input
                  type='checkbox'
                  name={name}
                  id={name}
                  ref={register(validationProps)}
                />
                <span>{title}</span>
              </label>
            </div>
          );

        case 'url':
          return (
            <div key={name}>
              <label htmlFor={name}>{title}</label>
              <input
                type='url'
                name={name}
                id={name}
                ref={register(validationProps)}
              />
            </div>
          );

        default:
          return (
            <div key='name'>
              <span className='red-text'>Invalid Field</span>
            </div>
          );
      }
    });
  };

  //render the form with the sidebar for error handling
  return (
    <div id='root'>
      <div className='app'>
        <div className='container '>
          <main>
            <div className='container '>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='center-align'>
                  <h4>{title}</h4>
                </div>
                {renderFields(fields)}
                <br />
                <button type='submit' className='btn'>
                  Submit
                </button>
              </form>
            </div>
          </main>
        </div>
        {errs && errs.length > 0 && (
          <SideBar>
            {errs.map((err) => (
              <>
                <MenuItem>
                  <div className='container'>
                    <h6 className='truncate'>
                      <i className='fas fa-exclamation-circle'></i>{' '}
                      {err.message}
                    </h6>
                    <br />
                  </div>
                </MenuItem>
              </>
            ))}
          </SideBar>
        )}
      </div>
    </div>
  );
};

export default Form;
