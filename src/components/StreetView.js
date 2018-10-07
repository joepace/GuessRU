import React, { Component } from 'react';
import Panorama from './Panorama'

class StreetView extends Component {
    render() {
        const coords = generateLocation();
        const location = {lat: coords[0], lng: coords[1]};
        return (
            <div className="row">
                <div className="streetView col-6">
                    {/* StreetView section goes here */}
                    <Panorama 
                        id="myPanorama"
                        options={{
                            position: location,
                            pov: {
                                heading: 34,
                                pitch: 10
                            },
                            addressControl: false
                        }}
                    />
                </div>
                <div className="guess col-6">
                    <h2>Which campus is this?</h2>
                    <form action="">
                        <input type="radio" name="campus" value="1"/> College Ave <br/>
                        <input type="radio" name="campus" value="2"/> Livingston <br/>
                        <input type="radio" name="campus" value="3"/> Busch <br/>
                        <input type="radio" name="campus" value="4"/> Cook/Douglass
                    </form>
                    
                </div>       
            </div>
        );
    }
}

function checkAnswer(guess) {
    if (campus === guess) {
        // Call function to display "Correct!"
    } else {
        // Display correct answer
    }
    // Call playAgain function
}

function correct() {
    // Display a "Correct!" message
}

function playAgain() {
    // Refreshes the page? idk
}

function generateCampus() {
    return Math.floor(Math.random() * 3 + 1);
}

// Global campus ID
const campus = generateCampus();
function generateLocation() {
    console.log(campus);
    let lat;
    let long;
    switch (campus) {
        case 1: // College Ave
            lat =  Math.random()*(40.505717-40.498368) + 40.498368;
            long = Math.random()*(-74.445459+74.447196) -74.447196;
            break;
        case 2: // Livingston
            lat = Math.random()*(40.525217-40.518432) + 40.518432;
            long = Math.random()*(-74.432783+74.447196) -74.447196;
            break;
        case 3: // Busch
            lat = Math.random()*(40.528708-40.518432) + 40.518432;
            long = Math.random()*(-74.453373+74.467771) -74.467771;
            break;
        case 4: // Cook/Douglass
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

/* For rendering a Map
    <Map
        id="myMap"
        options={{
            center: location,
            zoom: 14
        }}
        onMapLoad={map => {
        // eslint-disable-next-line
        var marker = new window.google.maps.Marker({
            position: location,
            map: map,
            title: 'You are here!'
        });
        }}
    />
*/