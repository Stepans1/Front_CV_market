import React, {useEffect, useState} from 'react';
import classes from "../styles/main.module.css"
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";



const PostCard = ({id,postHeader,post_body, post_city,post_type}) => {
    if (id != null) {


        return (

            <div className={classes.product} key = {id}>
             


                <br/>
                <p>{id}</p>
                <Link to={`/show/${id}`}>{postHeader}</Link>






            </div>

        );
    }
    else {
        return (
            <h1>Post list is empty </h1>
        )
    }

};

export default PostCard;
