import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import BookingHotel from '../BookingHotel/BookingHotel';
import fakeDataHotel from '../fakeData/fakeDataHotel';
import Map from '../Map/Map';

const Hotel = () => {
    
    const [hotel, setHotel] = useState(fakeDataHotel);

    return (
        <div className="hotel-body">
            <Row>
                <Col sm={8}>

                    {
                        hotel.map((hotel) => <BookingHotel htl={hotel}></BookingHotel>)
                    }

                </Col>
                <Col sm={4}>
                     <Map></Map>

                </Col>
                   
            </Row>
            
        </div>
    );
};

export default Hotel;