import React, { useEffect, useState } from 'react';

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';



const Map = () => {

{/* <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11 
  };*/}
    // const url = "https://google-maps-geocoding.p.rapidapi.com?key=";
    // const useKey = "4da3f3ce39mshc967204f925f158p1c2d2djsn21d806f3ed6f";

    // const [placeName, setPlaceName] = useState({});

    // //base url formate =  https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap

    // useEffect((
    //     fetch(`${url}${useKey}`)
    //     .then(res => res.json())
    //     .then(data => setPlaceName(data))
    // ),[])

    

    return (
        <div>
            <h1>This is map</h1>
        </div>

        // Important! Always set the container height explicitly
        
        // <GoogleMapReact
        //     bootstrapURLKeys={{ key:4da3f3ce39mshc967204f925f158p1c2d2djsn21d806f3ed6f /* YOUR KEY HERE */  }}
        //     defaultCenter={this.props.center}
        //     defaultZoom={this.props.zoom}
        // >
        //     <AnyReactComponent
        //     lat={59.955413}
        //     lng={30.337844}
        //     text="My Marker"
        //     />
        // </GoogleMapReact>
        

    );
};

export default Map;