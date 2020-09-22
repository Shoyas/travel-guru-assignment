import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlaceDestination.css';


const PlaceDestination = (props) => {

    const {description, name} = props.pl;
    //console.log(description);

    

    return (
        <div className="description-area">
            <h1>{name}</h1>
            <p>{description}</p>

            <Link className="nav-item" to={`/Booking/${name} && ${description}`}><Button className="button" variant="warning">Booking →</Button></Link>
            
        </div>
    );
};

export default PlaceDestination;