import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CoxBazar from '../CoxBazar/CoxBazar';
import Srimangal from '../Srimangal/Srimangal';
import Sundarbans from '../Sundarbans/Sundarbans';
import './Home.css';
import PlaceDestination from '../PlaceDestination/PlaceDestination';
import { TourContext } from '../../App';
import fakeDataCox from '../fakeData/fakeDataCox';

const Home = () => {
    const tourPlace = useContext(TourContext);
    const {place, setPlace} = tourPlace;

    const [placeDetail, setPlaceDetail] = useState(fakeDataCox[0]);
    //console.log(placeDetail);
    

    const handlePlaceDestination = e =>{
        if(e === "CoxBazar"){
            const info = place[0];
            setPlaceDetail(info);
            return info;
        }
        if(e === "Srimangal"){
            const info = place[1];
            setPlaceDetail(info);
            return info;
        }
        if(e === "Sundarbans"){
            const info = place[2];
            setPlaceDetail(info);
            return info;
        }
    }
    return (
        <div className="home-body-color">
            
                <Row>
                    <Col sm={5}>
                        <PlaceDestination pl={placeDetail}></PlaceDestination>
                    </Col>
                    <Col sm={7}>
                        <div className="tour-photo">
                            <div className="tour-part1" onClick={() => handlePlaceDestination("CoxBazar")}>
                            <CoxBazar></CoxBazar>
                            </div>
                            <div className="tour-part2" onClick={() => handlePlaceDestination("Srimangal")}>
                            <Srimangal></Srimangal>
                            </div>
                            <div className="tour-part3" onClick={() => handlePlaceDestination("Sundarbans")}>
                            <Sundarbans></Sundarbans>
                            </div>
                            
                        </div>
                    
                    </Col>    
                </Row>
        </div>
            
        
    );
};

export default Home;