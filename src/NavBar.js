import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function NavBar(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();

    function logOut()
    {
        localStorage.clear();
        navigate("/register")
    }
    return(
        <div>
            <Navbar style={{padding: "10px"}} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img src={process.env.PUBLIC_URL + "/hogwarts.png"} width="50px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className=" mr-auto navbar_wrapper pl-30">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                        <Nav.Link href="/quizes">Quizes</Nav.Link>
                        <Nav.Link href="/add">Create Quiz</Nav.Link>
                        </>
                        :
                        <>
                        <Nav.Link href="/register">Register</Nav.Link>
                        </>
                    }
                </Nav>
                {
                localStorage.getItem('user-info') ?

                    <Nav>
                        <NavDropdown className="float-md-right" title={user && user.surname}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    :null
                }
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default NavBar;