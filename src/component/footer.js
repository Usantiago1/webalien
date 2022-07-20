import React from "react";


import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit';


const Footer = () => {



  return (
    <>
      <MDBFooter className='text-center fixed-bottom' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/Usantiago1/webalien' role='button'>
              <MDBIcon fab icon='github' />
            </a>
          </section>

          <section className=''>
            <form >
              <div className='row d-flex justify-content-center'>
                <div className='col-auto'>
                  <p className='pt-2'>
                    <strong >Suscríbete a nuestro newsletter</strong>
                  </p>
                </div>


                <div className='col-auto'>

                </div>
              </div>
            </form>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 :
          <a className='text-white' href='https://github.com/Usantiago1/webalien'>
            github.com/Usantiago1
          </a>
        </div>
      </MDBFooter>

    </>
  );
}
export default Footer;