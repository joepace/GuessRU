import React, { Component } from 'react';
import Panorama from './Panorama'


class StreetView extends Component {
    render() {
        const coords = generateLocation();
        const location = {lat: coords[0], lng: coords[1], campusName: coords[2]};
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
                    <div className="btn-group-vertical">
                        <button className="btn btn-lg" id = "CA" onClick = {() => checkAnswer(1, location.campusName)}>College Ave</button><br/>
                        <button className="btn btn-lg" id = "Livi" onClick = {() => checkAnswer(2, location.campusName)}>Livingston</button><br/>
                        <button className="btn btn-lg" id = "Busch" onClick = {() => checkAnswer(3, location.campusName)}>Busch</button><br/>
                        <button className="btn btn-lg" id = "CD" onClick = {() => checkAnswer(4, location.campusName)}>Cook/Douglass</button><br/>                        
                    </div>
                    
                    <div id="overlay">
                        <div id="overlayText"></div>
                        <button className="btn btn-lg play-again" id ="overlayButton" onClick = {playAgain}>Play Again?</button>
                    </div>
                </div>       
            </div>
        );
    }
}
function checkAnswer(guess, name) {
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
        document.getElementById("overlayText").innerText = "Sorry, that's incorrect.\nYou are on " + name + ".";
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
function generateLocation() {
    console.log(campus);
    var campusName;
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
    return [lat, long, campusName];
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