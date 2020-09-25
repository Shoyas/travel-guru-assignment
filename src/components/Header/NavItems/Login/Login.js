import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../NavItem.css';
import './Login.css';
import googleIcon from './google.png';
import fbIcon from './fb.png';


import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [googleUser, setGoogleUser] = useState(UserContext);

    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // SignIn with google
    // const [googleUser, setGoogleUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     photo: '',
    //     password: '',
    //     error: '',
    //     success: '',
    // });



    const google = new firebase.auth.GoogleAuthProvider();

    const signedInByClickedWithGoogle = () => {
        firebase.auth().signInWithPopup(google)
        .then(result => {
            const token = result.credential.accessToken;
            //console.log(token);
            // The signed-in user info.
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
            }
            setGoogleUser(signedInUser);
            console.log(displayName, email, photoURL);
            history.replace(from);

        })
        .catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            
        });
    }

    const signedOutByClickedWithGoogle = () => {
        firebase.auth().signOut()
        .then( result => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',

            }
            setGoogleUser(signOutUser);
            console.log(googleUser);
        })
        .catch(error => {
            // An error happened.
        });
    }

    // Facebook login

    const facebook = new firebase.auth.FacebookAuthProvider();

    const signedInByClickedWithFacebook = () => {
        firebase.auth().signInWithPopup(facebook)
        .then(result => {
            const token = result.credential.accessToken;
            //console.log(token);
            // The signed-in user info.
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                photo: photoURL,
            }
            setGoogleUser(signedInUser);
            console.log(displayName, photoURL);

        })
        .catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            
        });
    }

    const signedOutByClickedWithFacebook = () => {
        firebase.auth().signOut()
        .then( result => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',

            }
            setGoogleUser(signOutUser);
            console.log(googleUser);
        })
        .catch(error => {
            // An error happened.
            const newUserInfo = {...googleUser};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setGoogleUser(newUserInfo);
        });
    }


    // Facebook Login finished

    // SignIn with email and password in Input form here
    const valueChange = (e) => {
        let formValidation = true;
        // debugger;
        if(e.target.name === 'email'){
            formValidation = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(formValidation);
        }
        if(e.target.name === 'password'){
            const passwordValidation =  e.target.value.length > 7;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            formValidation = passwordValidation && passwordHasNumber;

        }
        if(formValidation){
            const newUserInfo = {...googleUser};
            newUserInfo[e.target.name] = e.target.value;
            setGoogleUser(newUserInfo);
        }
        
    }
    const valueSubmit = (e) => {
        if(googleUser.email && googleUser.password ){
            firebase.auth().createUserWithEmailAndPassword(googleUser.email, googleUser.password)
            .then(res => {
                const newUserInfo = {...googleUser};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setGoogleUser(newUserInfo);
                console.log(newUserInfo);
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...googleUser};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setGoogleUser(newUserInfo);
            });
        }
        e.preventDefault();
    }
    

    return (
        <div className="body-color login-body">
            { newUser &&
                <h3>Create an account</h3>
            }
            

            <Form onSubmit={valueSubmit}>
                { newUser && 
                    <input type="text" name="first-name" onBlur={valueChange} className="person-detail" placeholder="First Name" required/>
                } 
                <br/>
                { newUser && 
                    <input type="text" name="last-name" onBlur={valueChange} className="person-detail" placeholder="Last Name" required/>
                } 
                <br/>
                <input type="text" name="email" onBlur={valueChange} className="person-detail" placeholder="Email" required/>
                <br/>
                <input type="password" name="password" onBlur={valueChange} className="person-detail" placeholder="Password" required/>
                <br/>
                {/* <input type="password" name="confirm-password" onBlur={valueChange} className="person-detail" placeholder="Confirm Password" required/> */}
                <br/>
                {
                googleUser.isSignedIn ? 
                <input type="submit" className="submit-detail" onClick={signedOutByClickedWithGoogle} value="Sign Out"/>
                :
                <input type="submit" className="submit-detail"  onClick={valueSubmit} value="Sign In"/>
            }

                
                    
            </Form>
            
            <span onClick={() => setNewUser(!newUser)} style={{color: "blue", cursor: "pointer"}}>
                
                <h6>Create a new account</h6>
                
            </span>

            {/* GoogleUser handle side */}
            {
                googleUser.isSignedIn ? 
                <button className="google-button" onClick={signedOutByClickedWithGoogle}>
                    <img id="googleIcon" src={googleIcon} alt=""/>
                    Sign Out from Google
                </button>
                :
                <button className="google-button" onClick={signedInByClickedWithGoogle}>
                    <img id="googleIcon" src={googleIcon} alt=""/>
                    Sign In with Google
                </button>
            }
            <br/>

            {/* FacebookUser handle side */}
            {
               googleUser.isSignedIn ? 

                <button className="google-button" onClick={signedOutByClickedWithFacebook}>
                    <img id="googleIcon" src={fbIcon} alt=""/>
                    Sign Out with Facebook
                </button>
                :
                <button className="google-button" onClick={signedInByClickedWithFacebook}>
                    <img id="googleIcon" src={fbIcon} alt=""/>
                    Sign In with Facebook
                </button>
            
            }


            

            <p style={{color: "red"}}>{googleUser.error}</p>
            {
                googleUser.success && <p style={{color: "white"}}>User created successfully</p>
            }
        </div>
    );
};

export default Login;