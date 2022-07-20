import React, { useRef, useState } from "react";

import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow
  } from 'mdb-react-ui-kit';

import emailjs from "@emailjs/browser";



const Footer = () =>{


  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p75gfbr','template_22q4sui',form.current,'jC5_W8QPWemHmQMrQ')
    .then((result)=>{
      console.log(result.text);
    },(err) => {
      console.log(err.text);
    })
  }

    return(
        <>
 <MDBFooter className='text-center fixed-bottom' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/Usantiago1' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>

        <section className=''>
          <form ref={form} onSubmit={sendEmail}>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Suscríbete a nuestro newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput name="form_name" type='email' label='Email address' className='mb-4' />
                <Button type="submit" className='btn btn-primary'>dd</Button>
              </MDBCol>

              <div className='col-auto'>
              
              </div>
            </div>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>


      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
         github.com/Usantiago1
        </a>
      </div>
    </MDBFooter>
 
    </>
  );
}
export default Footer;