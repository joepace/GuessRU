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
                    <h2>Which campus are you on?</h2>
                
                    <button id = "CA" onClick = {() => checkAnswer(1)}>College Ave</button><br/>
                    <button id = "Livi" onClick = {() => checkAnswer(2)}>Livingston</button><br/>
                    <button id = "Busch" onClick = {() => checkAnswer(3)}>Busch</button><br/>
                    <button id = "CD" onClick = {() => checkAnswer(4)}>Cook/Douglass</button><br/>
                    <button onClick = {playAgain}>The Void (Black Screen) - Click to reload!</button>
                    <div id="overlay">
                        <div id="overlayText"></div>
                        <button id ="overlayButton" onClick = {playAgain}>Play Again?</button>
                    </div>
                </div>       
            </div>
        );
    }
}
function checkAnswer(guess) {
    if (campus === guess) {
        // Call function to display "Correct!"
        var correct = document.getElementById("overlay");
        correct.style.display = "block";
        correct.style.backgroundColor = "rgba(72, 241, 50, 0.7)";
        document.getElementById("overlayText").innerText = "Correct!";
    } else {
        // Display correct answer
        var incorrect = document.getElementById("overlay");
        incorrect.style.display = "block";
        document.getElementById("overlayText").innerText = "Sorry, that's incorrect. <br/>The correct answer was " + campusName + ".";
        incorrect.style.backgroundColor = "rgba(230, 42, 18, 0.7)";

    }
    // Call playAgain function
}

function playAgain() {
    // Refreshes the page
    window.location.reload();
}

function generateCampus() {
    return Math.floor(Math.random() * 3 + 1);
}

// Global campus ID
const campus = generateCampus();
const campusName;
function generateLocation() {
    console.log(campus);
    let lat;
    let long;
    switch (campus) {
        case 1: // College Ave
            lat =  Math.random()*(40.505717-40.498368) + 40.498368;
            long = Math.random()*(-74.445459+74.447196) -74.447196;
            campusName = "College Ave";
            break;
        case 2: // Livingston
            lat = Math.random()*(40.525217-40.518432) + 40.518432;
            long = Math.random()*(-74.432783+74.447196) -74.447196;
            campusName = "Livingston";
            break;
        case 3: // Busch
            lat = Math.random()*(40.528708-40.518432) + 40.518432;
            long = Math.random()*(-74.453373+74.467771) -74.467771;
            campusName = "Busch";
            break;
        case 4: // Cook/Douglass
            lat = Math.random()*(40.485598-40.475704) + 40.475704;
            long = Math.random()*(-74.427856+74.437336) -74.437336;
            campusName = "Cook/Douglass";
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