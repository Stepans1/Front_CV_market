import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

const Edit = () => {
    const {id}=useParams();
    const [posts,setPost]=useState({post_header:'',post_body:'',post_city:'',
                                                   post_type:'',posts_start_day:'',posts_end_day:'',
                                                   post_requirements:'',post_offer:'',post_contactPhone:'',post_email:''});
    const navigate = useNavigate();
    const [workTypes,setworkTypes]=useState([])
    const [errors, setErrors] = useState({});
    function getPost(){
        axios.get('http://localhost:8088/post/'+id)
            .then(response => {
                setPost(response.data);
            });
    }
    const {


        handleSubmit,

    }=useForm({
        mode:"onBlur",

    });
    useEffect(()=> {
        getPost();
        getWorkType();

    },[]);

    function getWorkType(){
        axios.get('http://localhost:8088/post/getWorkType')
            .then(response => {
                setworkTypes(response.data);

            });
    }
    function saveChanges() {
        axios.post(`http://localhost:8088/post/edit/${id}`, posts)
            .then((response) => {

                console.log('Success', response.data);
                navigate("/");
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {

                    const validationErrors = error.response.data;
                    setErrors(validationErrors);
                    console.log('Validation error:', validationErrors);
                } else {
                    console.error('Error:', error);
                }
            });

    }


    return (
        <div>

            <form onSubmit={handleSubmit(saveChanges)}>
            <label form='body'>Post body</label>
            <input id='body' type="text"  value={posts.post_body}   onChange={e => setPost({...posts, post_body: e.target.value})}/>
                {errors.length ?
                    errors.map((error, index) => {
                    if (error.field === 'post_body') {
                        return <div key={index} className="error">{error.error}</div>;
                    }


                }):
                <div></div>}
                <hr/>
            <label form='city'>City</label>
            <input id='city' type="text" value={posts.post_city}  onChange={e => setPost({...posts, post_city: e.target.value})}/>
                {errors.length ?
                    errors.map((error, index) => {
                        if (error.field === 'post_city') {
                            return <div key={index} className="error">{error.error}</div>;
                        }


                    }):
                    <div></div>}
                <hr/>
            <label form='phone'>Phone</label>
            <input id='phone' type='text' value={posts.post_contactPhone}  onChange={e => setPost({...posts, post_contactPhone: e.target.value})}/>
                {errors.length ?
                    errors.map((error, index) => {
                        if (error.field === 'post_contactPhone') {
                            return <div key={index} className="error">{error.error}</div>;
                        }


                    }):
                    <div></div>}
                <hr/>
            <label form='email'>Email</label>
            <input id='email' type='text' value={posts.post_email} onChange={e => setPost({...posts, post_email: e.target.value})} />
                {errors.length ?
                    errors.map((error, index) => {
                        if (error.field === 'post_email') {
                            return <div key={index} className="error">{error.error}</div>;
                        }


                    }):
                    <div></div>}
            <hr/>
            <label form='header'>Header</label>
            <input id='header' type='text' value={posts.post_header} onChange={e => setPost({...posts, post_header: e.target.value})}/>
                {errors.length ?
                    errors.map((error, index) => {
                        if (error.field === 'post_header') {
                            return <div key={index} className="error">{error.error}</div>;
                        }


                    }):
                    <div></div>}
                <hr/>
            <label form='offer'>What are you offering?</label>
            <input id='offer' type='text' value={posts.post_offer} onChange={e => setPost({...posts, post_offer: e.target.value})}/>
                {errors.length ?
                    errors.map((error, index) => {
                        if (error.field === 'post_offer') {
                            return <div key={index} className="error">{error.error}</div>;
                        }


                    }):
                    <div></div>}
                <hr/>
            <label form='post_requirements'>What do you expect?</label>
            <input id='post_requirements' type='text' value={posts.post_requirements} onChange={e => setPost({...posts, post_requirements: e.target.value})}/>
                {errors.length ?
                    errors.map((error, index) => {
                        if (error.field === 'post_requirements') {
                            return <div key={index} className="error">{error.error}</div>;
                        }


                    }):
                    <div></div>}
            <hr/>
            <label form='post_type'>What type of work </label>
                <select
                     value={posts.post_type}
                    id="WorkType"

                    onChange={e => setPost({...posts, post_type: e.target.value})}
                >
                    {/*<option value="" disabled>Type filter</option>*/}

                    {workTypes.length ?
                        workTypes.map((item, index) => (
                            <option key={index}>{item}</option>
                        ))
                        :
                        <option>Empty type</option>
                    }
                </select>
            <hr/>
            <label form='posts_start_day'>Post release day</label>
            <input id='posts_start_day' type='date' value={posts.posts_start_day} onChange={e => setPost({...posts, posts_start_day: e.target.value})}/>
                {errors.length ?
                    errors.map((error, index) => {
                        if (error.field === 'posts_start_day') {
                            return <div key={index} className="error">{error.error}</div>;
                        }


                    }):
                    <div></div>}
                <hr/>
            <label form='posts_end_day'>Post die day</label>
            <input id='posts_end_day' type='date' value={posts.posts_end_day} onChange={e => setPost({...posts, posts_end_day: e.target.value})}/>
                {errors.length ?
                    errors.map((error, index) => {
                        if (error.field === 'posts_end_day') {
                            return <div key={index} className="error">{error.error}</div>;
                        }


                    }):
                    <div></div>}
                <hr/>
                <button   type="submit" >Save</button>
            </form>
            <br/>

        </div>
    );
};

export default Edit;