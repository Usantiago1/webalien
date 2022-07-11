import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Inicio from './inicio';
import EndPoint from './endPoint';
import Registro from './registro';

const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/EndPoint' element={<EndPoint/>}/>
        <Route path='/Registro' element={<Registro/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;