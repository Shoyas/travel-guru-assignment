import React from 'react';
import { Form } from 'react-bootstrap';
import '../NavItem.css';
import './Login.css';

const Login = () => {
    return (
        <div className="body-color login-body">
            <h3>Create an account</h3>
            <Form action="">
                <input type="text" className="person-detail" placeholder="First Name" aria-required/>
                <br/>
                <input type="text" className="person-detail" placeholder="Last Name" />
                <br/>
                <input type="text" className="person-detail" placeholder="Username or Email" />
                <br/>
                <input type="password" className="person-detail" placeholder="Password" />
                <br/>
                <input type="password" className="person-detail" placeholder="Confirm Password"/>
                <br/>
            </Form>
            

            
            <input type="submit" className="person-detail" value="Create an account"/>
            <h6>Already have an account <a href="">Login</a></h6>

        </div>
    );
};

export default Login;