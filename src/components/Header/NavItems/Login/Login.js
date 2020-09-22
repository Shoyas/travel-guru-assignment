import React from 'react';
import { Form } from 'react-bootstrap';
import '../NavItem.css';
import './Login.css';

const Login = () => {

    const handleSubmit = () => {
        console.log("Clicked");
    }

    return (
        <div className="body-color login-body">
            <h3>Create an account</h3>
            <Form onSubmit={handleSubmit}>
                <input type="text" className="person-detail" placeholder="First Name" required/>
                <br/>
                <input type="text" className="person-detail" placeholder="Last Name" required/>
                <br/>
                <input type="text" className="person-detail" placeholder="Username or Email" required/>
                <br/>
                <input type="password" className="person-detail" placeholder="Password" required/>
                <br/>
                <input type="password" className="person-detail" placeholder="Confirm Password" required/>
                <br/>
                <input type="submit" className="submit-detail" value="Create an account"/>
            </Form>
            
            <h6>Already have an account <a href="">Login</a></h6>

        </div>
    );
};

export default Login;