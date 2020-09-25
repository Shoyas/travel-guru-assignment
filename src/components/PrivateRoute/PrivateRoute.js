import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    // const [googleUser, setGoogleUser] = useState({
    //     isSignedIn: true,
        
    // });
    const {googleUser, setGoogleUser} = useState(UserContext);
    // console.log(googleUser.isSignedIn);
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                googleUser.success ? (
                    children
                ) : (
                    <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                    />
                )
                }
            />
        </div>
    );
};

export default PrivateRoute;