import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostCard from "./PostCard";
import selections from "../styles/Selections.module.css"
//import classes from "./Posts.module.css";
import classes from "../styles/main.module.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {Loading} from "../context";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
        <Navbar expand="lg" className="bg-body-tertiary" style={{ width: '100%' }}>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>Link</Nav.Link>

                    <NavDropdown title="Dropdown Example" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action6">Action 6</NavDropdown.Item>
                        <NavDropdown.Item href="#action7">Action 7</NavDropdown.Item>
                        <NavDropdown.Item href="#action8">Action 8</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        <div className={selections.wrapper}>
            <div className={selections.mainContent}>
            <header>
                <h1>Posts</h1><br/>
            {/*<select*/}
            {/*    // defaultValue={""}*/}
            {/*    id="typeFilter"*/}
            {/*    value={filter.option}*/}
            {/*    onChange={(e) => {*/}

            {/*        setFilter({*/}
            {/*            option: e.target.value*/}
            {/*        });*/}

            {/*          filtering(e.target.value);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <option value="" disabled>Type filter</option>*/}
            {/*    <option value="all" >All</option>*/}
            {/*    {type.length ?*/}
            {/*        type.map((t) =>*/}
            {/*            <option key={t.type} value={t.type} id={t.type}>{t.type}</option>*/}
            {/*        )*/}
            {/*        :*/}
            {/*        <option>Empty type</option>*/}
            {/*    }*/}
            {/*</select>*/}
            <div className={classes.buttons}>
                <Button as={Link} to="/addPost" variant="outline-primary">
                    ADD
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <div className={selections.leftSection}></div>
        <div className={selections.rightSection}></div>
        </div>
    </div>
    );
}



export default PostList;
