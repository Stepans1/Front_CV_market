import classes from "../styles/Selections.module.css"
import 'bootstrap/dist/css/bootstrap.css';

import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Test = () => {

    return (
        <html>

        <body>
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


        <div className={classes.wrapper}>
            <div className={classes.leftSection}>leftSection</div>
            <div className={classes.mainContent}>
                mainContent
               <p>dfd</p>
            </div>
            <div className={classes.rightSection}>rightSection</div>
        </div>
        </body>
        </html>
    );
};

export default Test;