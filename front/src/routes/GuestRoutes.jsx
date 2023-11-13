import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import AddPost from "../Components/AddPost";
import Test from "../Components/Test";
import Show from "../Components/Show";
import Edit from "../Components/Edit";
import Demo from "../Components/Demo";
import Login from "../Components/Login";

const GuestRoutes = () => {
    return (
        <div>


                <Routes>
                    <Route path="/show/:id" element={<Show/>}/>
                    <Route path={"/test"} element={<Test/>}/>
                    <Route path="/demo" element={<Demo/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Posts/>}/>

                </Routes>



        </div>
    );
};

export default GuestRoutes;