import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';


const ContactForm = () => {
  const emailRegex = /^[A-Za-z0-9_\-]+@[A-Za-z0-9_\-]+\.[A-Za-z]{2,4}$/;

  const [errorMessage, setErrorMessage] = useState('');

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Ange ditt namn')
        .min(4, 'Förnamn och efternamn måste bestå av minst fyra tecken'),

      email: Yup.string()
        .required('Du måste ange en korrekt e-postadress')
        .matches(emailRegex, 'Ogiltig e-postadress'),

      message: Yup.string()
        .required('Skriv ditt meddelande')
        .min(9, 'Lämna gärna ditt meddelande här, det ska vara minst 9 tecken'),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  const clearForm = () => {
    form.resetForm();
  };
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (values) => {
    setErrorMessage('');

    const user = { name: values.name, email: values.email, Message: values.message };
    const json = JSON.stringify(user);

    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: json,
    });

    clearForm();

    switch (result.status) {
      case 200:
        setSubmitSuccess(true);
        break;
    
      case 400:
        setSubmitSuccess(false);
        break;
    
      default:
       
    }
    
  };

  return (
    <div>
      <section className="contact-body">
        <form onSubmit={form.handleSubmit} className="ct-body-bottom" noValidate>
          <h5>Leave us a message for any information.</h5>
          <p className="errormessage">{errorMessage}</p>

          <div className="Name-a">
            <label className={form.touched.name && form.errors.name ? 'errormessage' : ''}>
              {form.touched.name && form.errors.name ? form.errors.name : ''}
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              
            />
          </div>

          <div className="Name-b">
            <label className={form.touched.email && form.errors.email ? 'errormessage' : ''}>
              {form.touched.email && form.errors.email ? form.errors.email : ''}
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              
            />
          </div>

          <div className="Name-c">
            <label className={form.touched.message && form.errors.message ? 'errormessage' : ''}>
              {form.touched.message && form.errors.message ? form.errors.message : ''}
            </label>
            <textarea
              type="text"
              id="message"
              placeholder="Your Message"
              cols="30"
              rows="6"
              value={form.values.message}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              
            />
          </div>

          <button type="submit">Send Message<i className="fa-solid fa-arrow-right"></i></button>

        </form>
        {submitSuccess && (
          
          <div className='confirm'>
          <h1> <i class="fa-solid fa-check fa-beat-fade"></i> Thank you for your message </h1>
          <a href="/">Return to Home<i class="fa-sharp fa-solid fa-house"></i></a>
          </div>

      )}

        
      </section>


    </div>
  );
};

export default ContactForm;
