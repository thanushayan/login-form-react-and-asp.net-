 import React from 'react';
 import Login from './Login';
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
 
 function App() {
   return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
       <Login/>
     </BrowserRouter>
   )
 }
 
 export default App
 