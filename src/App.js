import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import 'bootstrap-icons/bootstrap-icons.svg';
// import 'bootstrap/dist/js/bootstrap.bundle.js';


import "./App.css";


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Product from './Components/Product';
import Authentication from './Components/Authentication';
import Shipping from './Components/Shipping';
import Payment from './Components/Payment';
import Thanks from './Components/Thanks';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ContactUs from './Components/ContactUs';
import About from './Components/About';

import "./App.css"
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className='App'>

    <BrowserRouter>
      {/* <Layout> */}
        {/* <Routes> */}
            
            {/* <Routes> */}
            
            {/* <Routes> */}
            

            <Routes>
              <Route path="/" element={<Home/>}/>

              <Route path="*" element={
                <ProtectedRoute>
                  <Routes>
                    <Route path='/cart/:id' element={<Cart/>} />
                    <Route path='/product/:id' element={<Product/>} />
                    <Route path='/authentication/:id' element={<Authentication/>} />
                    <Route path='/shipping/:id' element={<Shipping/>} />
                    <Route path='/payment/:id' element={<Payment/>} />

                  </Routes>
                </ProtectedRoute>
              }/>

              
              <Route path='/thanks' element={<Thanks/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contactus' element={<ContactUs/>} />
              

              {/* <Route element={<ProtectedRoute />} >
                
              </Route> */}
              
              
            
            </Routes>
        {/* </Routes> */}
      {/* </Layout> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
