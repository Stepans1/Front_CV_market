import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Demo from "../Components/Demo";
import axios from "axios";
import Edit from "../Components/Edit";
import AddPost from "../Components/AddPost";

const UserRoutes = () => {
    const navigate = useNavigate();
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            'Content-Type': 'application/json',
        },
    };
    function findJwt(){
        console.log(localStorage.getItem("jwt"));
       // localStorage.clear();
       // localStorage.setItem("jwt","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        axios.post('http://localhost:8088/api/accounts/validateJWT',{},config)
            .then((response) => {


                console.log('Success', response.data);
              //  localStorage.setItem("jwt",response.data)

            })
            .catch((error) => {
                if (error.response.status === 401) {
                    navigate("/public/login")
                }


            });
    }

    useEffect(() => {
        findJwt();
    }, []);


    return (
        <div>
            <Routes>

                <Route path="/addPost" element={<AddPost/>}/>
                <Route path="/demo" element={<Demo/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>

            </Routes>
        </div>
    );
};

export default UserRoutes;