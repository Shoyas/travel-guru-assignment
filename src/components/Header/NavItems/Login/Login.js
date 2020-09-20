import React from 'react';
import { Form } from 'react-bootstrap';
import '../NavItem.css';

const Login = () => {
    return (
        <div className="body-color">
            <h3>Create an account</h3>
            <Form action="">
                <input type="text" name="" placeholder="First Name" id=""/>
                <br/>
                <input type="text" name="" placeholder="Last Name" id=""/>
                <br/>
                <input type="text" name="" placeholder="Username or Email" id=""/>
                <br/>
                <input type="password" name="" placeholder="Password" id=""/>
                <br/>
                <input type="password" name="" placeholder="Confirm Password" id=""/>
            </Form>

            <button>Create an account</button>
            <h4>Already have an account</h4>

        </div>
    );
};

export default Login;