import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './BookingHotel.css';

const BookingHotel = (props) => {

    const htlRoom = props.htl;
    const {name, image, article} = htlRoom;
    //console.log(htlRoom.name);

    return (
        <div className="hotel-area">

            <Row>
                <Col sm={4}>
                    <div className="image-area">
                        <img src={image} alt=""/>
                    </div>

                </Col>
                <Col sm={8}>
                    <div className="detail-area">
                        <h1>{name}</h1>
                        <p>{article}</p>
                    </div> 

                </Col>
                   
            </Row>

            
            
        </div>
    );
};

export default BookingHotel;