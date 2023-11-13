import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

const Login = () => {

    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [error,setError]=useState();
    function send() {
        console.log(username);
        setError("")
        axios.post('http://localhost:8088/api/accounts/login',{
            username: username,
            password: password
        })
            .then((response) => {


                console.log('Success', response.data);
                localStorage.removeItem("jwt");
                localStorage.setItem("jwt",response.data['jwt-token'])

            })
            .catch((error) => {
                if (error.response.status === 401) {
                    // Другая ошибка, например, конфликт
                    setError(error.response.data.message);
                    // Здесь обработка других типов ошибок
                }


            });

    }

    const {
        handleSubmit,
    }=useForm({
        mode:"onBlur",

    });



    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            'Content-Type': 'application/json',
        },
    };

        return (
            <form onSubmit={handleSubmit(send)}>
                {error}
                <label>
                    Username:
                    <input type="text" name="username"  onChange={e => setUsername(  e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={e => setPassword(  e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        );

};

export default Login;