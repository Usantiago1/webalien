import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Inicio from './inicio';
import EndPoint from './endPoint';
import Registro from './registro';
import Menu from './component/tabMenu';
const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/EndPoint' element={<EndPoint/>}/>
        <Route path='/Registro' element={<Registro/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;