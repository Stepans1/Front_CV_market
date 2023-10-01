import React, {useState} from 'react';
import  "./styles/main.module.css"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import {Loading} from "./context";

import Show from "./Components/Show";
import Edit from "./Components/Edit";

function App() {


const [loading,setLoading]=useState(false);
  return (
      <div className='App'>

          <Loading.Provider value={{
              loading,
              setLoading
          }}>
        <BrowserRouter >

         <Routes>

                <Route path="/" element={<Products/>}/>
                <Route path="/addproduct" element={<AddProduct/>}/>

                <Route path="/show/:id" element={<Show/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
         </Routes>


        </BrowserRouter>
          </Loading.Provider>
      </div>
  );
}

export default App;
