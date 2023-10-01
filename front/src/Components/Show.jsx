import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";




const Show = () => {
    const {id}=useParams();
    const [postInfo, setPostInfo] = useState([]);
    const navigate = useNavigate();
    function deleteProducts() {

        axios.post(`http://localhost:8088/post/del/${id}`)
            .then(response => {
                if(response.status===200){
                    navigate("/")
                }


    });
}

function getPost(){
    axios.get('http://localhost:8088/post/'+id)
        .then(response => {
                setPostInfo(response.data);
            });
    }

    useEffect(()=> {
        getPost();


    },[]);
    return (

        <div>

            <button id="delete-product-btn" onClick={deleteProducts}>DELETE</button>
            <br/>
            <p>{postInfo.id}</p>
            <p>{postInfo.post_body}</p>
            <Link to={`/edit/${postInfo.id}`}>edit</Link>
        </div>
    );
};

export default Show;