import React, {useEffect} from 'react';
import {Navigate, Route} from "react-router-dom";
import Demo from "../Components/Demo";
import axios from "axios";

const AdminRoutes = () => {
    const navigate = useNavigate();

    function findJwt(){
      //  localStorage.clear();
      //  localStorage.setItem("jwt","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        axios.post('http://localhost:8088/api/accounts/validateJWT',localStorage.getItem("jwt"))
            .then((response) => {


                console.log('Success', response.data);
                localStorage.setItem("jwt",response.data)

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
            <Route path="/demo" element={<Demo/>}/>

        </div>
    );
};

export default AdminRoutes;