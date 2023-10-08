import React, {useState} from 'react';
//import  "./styles/main.module.css"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import AddProduct from "./pages/AddProduct";
import {Loading} from "./context";

import Show from "./Components/Show";
import Edit from "./Components/Edit";
import AddPost from "./Components/AddPost";
import Test from "./Components/Test";

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

                <Route path="/" element={<Posts/>}/>
                <Route path="/addPost" element={<AddPost/>}/>
                <Route path={"/test"} element={<Test/>}/>
                <Route path="/show/:id" element={<Show/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
         </Routes>


        </BrowserRouter>
          </Loading.Provider>
      </div>
  );
}

export default App;
