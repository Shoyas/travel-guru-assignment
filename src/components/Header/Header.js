import React from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
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
                    <Link className="nav-item" to="/news">News</Link>
                    <Link className="nav-item" to="/destination">Destination</Link>
                    <Link className="nav-item" to="/blog">Blog</Link>
                    <Link className="nav-item" to="/contact">Contact</Link>
                    <Link className="nav-item" to="/login">LogIn</Link>
                </Nav>
                
            </Navbar>
        </div>

        </div>
        
    );
};

export default Header;