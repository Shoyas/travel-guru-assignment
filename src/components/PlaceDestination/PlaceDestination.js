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
            <Button className="button" variant="warning">
                <Link className="nav-item" id="nav-item-button"
                    to={`/Booking/${name} && ${description}`}>
                    Booking →
                </Link>
            </Button>
            
        </div>
    );
};

export default PlaceDestination;