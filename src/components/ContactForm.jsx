import { useFormik } from 'formik'
import React, { useState } from 'react'
import *as Yup from 'yup'


const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState ('')
  const form = useFormik ({
    initialValues:{
      name:'',
      email:'',
      message:''


    },

    validateOnMount: Yup.object ({
      name: Yup.string()
        .required("Skriv gärna förnman och efternamn")
        .min(4, "förnman och efternamn måste bestå av minst fyra tecken"),

      email: Yup.string()
        .required("E-postadress måste anges ")
        .email( "e-postadressen måste vara giltig"),
      
      message: Yup.string()
        .required("Skriv ditt meddelande ")
        .min(9, "lämna gärna  ditt meddelande här")

    }),


    onSubmit:(values) => {
      console.log (values)
    }
      
  })
 
      return (

          <div>
            <section className="contact-body">
            <form onSubmit={form.handleSubmit} className="ct-body-bottom"  noValidate>
                      <h5>Leave us a message for any information.</h5>
                      <p className="errormessage" >{errorMessage}</p>
                      <div className="Name-a ">
                          <input type="text" id="name" placeholder="Name" value={form.values.name} onChange={form.handleChange} />

                      </div>
                      <div className="Name-b">
                          <input type="email"  id="email" placeholder="Email" value={form.values.email} onChange={form.handleChange}  />
                        
                      </div>
                      <div className="Name-c">
                          <textarea type="text"  id="message"  placeholder="Your Message" cols="30"  rows="6" value={form.values.message} onChange={form.handleChange}  ></textarea>
                      </div>
                      
                      <button  type="submit">Send Message<i className="fa-solid fa-arrow-right"></i></button>
            </form>
            </section>
            </div>
          
      )
}

export default ContactForm