import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostCard from "./PostCard";
//import classes from "./Products.module.css";
import classes from "../styles/main.module.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {Loading} from "../context";
//get products
const PostList = function () {
    const {loading} = useContext(Loading);
    let [posts, setPosts] = useState([]);
    const [type,setType]=useState([]);
    const [filter,setFilter]=useState({option:''});
    function selectProducts(){
        axios.get('http://localhost:8088/post/getHeaders')
            .then(response => {
                setPosts(response.data);
            });
    }
    function getType(){
        axios.get(`http://localhost/magaz/back-end/public/type`)
            .then(response => {

                setType(response.data);

            });


    }
    function filtering(filterType){
        axios.get(`http://localhost/magaz/back-end/public/getByType?type=`+ filterType)
            .then(response => {
                posts=[];

                setPosts(response.data);

            });


    }
    useEffect(()=> {
        selectProducts();
        getType();

    },[loading]);








return (
    <div>
        <header>
            <h1>Posts</h1><br/>
            <select
                // defaultValue={""}
                id="typeFilter"
                value={filter.option}
                onChange={(e) => {

                    setFilter({
                        option: e.target.value
                    });

                      filtering(e.target.value);
                }}
            >
                <option value="" disabled>Type filter</option>
                <option value="all" >All</option>
                {type.length ?
                    type.map((t) =>
                        <option key={t.type} value={t.type} id={t.type}>{t.type}</option>
                    )
                    :
                    <option>Empty type</option>
                }
            </select>
            <div className={classes.buttons}>
                <button ><Link to='/addproduct'>ADD</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                <button id="change-btn" ><Link to='/changeForm'>CHANGE</Link></button>
            </div>
            <hr/>
        </header>

        <div className={classes.productList}>
            {posts.length ?
            posts.map((product) =>
                 <PostCard key={product.id} id={product.id} postHeader={product.postHeader} />

                )
                :
                <p>Product list is empty</p>
            }
        </div>
    </div>
    );
}



export default PostList;
