import React from 'react';
import { Button } from 'react-bootstrap';
import './PlaceDestination.css';


const PlaceDestination = (props) => {

    const {description, name} = props.pl;
    //console.log(description);

    return (
        <div className="description-area">
            <h4>{name}</h4>
            <p>{description}</p>
            <Button variant="warning">Warning</Button>
        </div>
    );
};

export default PlaceDestination;