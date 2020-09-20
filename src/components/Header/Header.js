import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="body-color">
            <div className="container">
            <Navbar bg="" variant="light" className="content">
                <Link to="/home" className="logo">
                    <img src={logo} alt=""/>
                </Link>
                <Form inline>
                    <input type="text"  placeholder="Search your destination" className="search-bar"/>
                </Form>
                <Nav className="ml-auto">
                    <Link className="nav-item" to="/news"><Button className="button" variant="warning">News</Button></Link>
                    <Link className="nav-item" to="/destination"><Button className="button" variant="warning">Destination</Button></Link>
                    <Link className="nav-item" to="/blog"><Button className="button" variant="warning">Blog</Button></Link>
                    <Link className="nav-item" to="/contact"><Button className="button" variant="warning">Contact</Button></Link>
                    <Link className="nav-item" to="/login"><Button className="button" variant="warning">LogIn</Button></Link>
                </Nav>
                
            </Navbar>
        </div>

        </div>
        
    );
};

export default Header;