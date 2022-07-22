import React from "react";


import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';


const Footer = () => {



  return (
    <>
      <MDBFooter className='fixed-bottom' color='white' bgColor='dark'>
        <MDBContainer className='p-1'>
          <div>
            <div className="row">
              <h2 className='text-center mt-3'>AVISO DE PRIVACIDAD INTEGRAL</h2>

              <div className="col-5">
                <h5>¿Para qué fines utilizaremos sus datos personales?</h5>
                <p className="fw-light lh-1 text-start">Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son
                  necesarias para el servicio que solicita:

                  Respuesta a mensajes del formulario de contacto, Prestación de cualquier servicio solicitado
                  Con la finalidad de recabar datos de información al realizar nuestro aviso de privacidad.</p>
              </div>

              <div className="col-6">
                <h5>¿Qué datos personales utilizaremos para estos fines?</h5>
                <p className="fw-light lh-1 text-start">Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes
                  datos personales:
                  Datos de identificación y contacto, Datos laborales, Datos patrimoniales y/o financieros, Datos sobre
                  pasatiempos</p>
              </div>
            </div>
          </div>
        </MDBContainer>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <a className='text-white' href='https://github.com/Usantiago1/webalien'>
            <small>&copy; 2022 <b>UPT</b> - Todos los Derechos Reservados. | Ultima actualización de este aviso de privacidad 27/07/22</small>
          </a>
        </div>

      </MDBFooter>

    </>
  );
}
export default Footer;