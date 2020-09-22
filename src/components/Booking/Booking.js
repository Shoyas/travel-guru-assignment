import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Booking.css';
import icon from './image.png';

const Booking = () => {
    let {name, description} = useParams();
    //console.log(description, name);


    return (
        <div className="booking-body-color">
            <Row>
                <Col sm={5}>
                    <div className="detail-body">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </Col>
                <Col sm={7}>
                    <div className="form-body">
                        <Form action="">
                            <h6>Origin</h6>
                            <input type="text" className="booking-form" aria-required/>
                            <br/>
                            <h6>Destination</h6>
                            <input type="text" className="booking-form"  />
                            <br/>
                            <div className="schedule">
                                <div>
                                    <h6>From<span className="schedule-headline">To</span></h6>
                                </div>
                                <div className="schedule-input">
                                    <input type="text" className="schedule-input-form"/>
                                    <img src={icon} alt=""/>
                                    <input type="text" className="schedule-input-form next-schedule-input-form"  />
                                    <img src={icon} alt=""/>
                                </div>
                                
                            </div>
                            <div className="">
                                <Button className="submit-button" variant="warning"><Link className="nav-item" id="button-area" to="/hotel">Start Booking</Link></Button>
                            </div>

                        </Form>
                    </div>
                
                </Col>    
            </Row>
        </div>
    );
};

export default Booking;