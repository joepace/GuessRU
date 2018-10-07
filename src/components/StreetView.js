import React, { Component } from 'react';
import Map from './Map'

class StreetView extends Component {
    render() {
        const coords = generateLocation();
        const location = {lat: coords[0], lng: coords[1]};
        return (
            <div className="streetView col-8">
                {/* StreetView section goes here */}
                
                <Map
                    id="myMap"
                    options={{
                        center: location,
                        zoom: 14
                    }}
                    onMapLoad={map => {
                    var marker = new window.google.maps.Marker({
                        position: location,
                        map: map,
                        title: 'You are here!'
                    });
                    }}
                />
            </div>        
        );
    }
}

function generateCampus() {
    return Math.floor(Math.random() * 3 + 1);
}

function generateLocation() {
    let campus = generateCampus();
    console.log(campus);
    let lat;
    let long;
    switch (campus) {
        case 1:
            lat =  Math.random()*(40.505717-40.498368) + 40.498368;
            long = Math.random()*(-74.445459+74.447196) -74.447196;
            break;
        case 2:
            lat = Math.random()*(40.525217-40.518432) + 40.518432;
            long = Math.random()*(-74.432783+74.447196) -74.447196;
            break;
        case 3:
            lat = Math.random()*(40.528708-40.518432) + 40.518432;
            long = Math.random()*(-74.453373+74.467771) -74.467771;
            break;
        case 4:
            lat = Math.random()*(40.485598-40.475704) + 40.475704;
            long = Math.random()*(-74.427856+74.437336) -74.437336;
            break;
        default:
            console.log("Error: invalid campus");
            break;
    }
    console.log("Latitude: " + lat);
    console.log("Longitude: " + long);
    return [lat, long];
}

export default StreetView;