import React, { Component } from 'react';

class Panorama extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const pano = new window.google.maps.StreetViewPanorama(
      document.getElementById(this.props.id),
      this.props.options);
      var streetViewService = new window.google.maps.StreetViewService();
      var STREETVIEW_MAX_DISTANCE = 100;
      var latLng = new window.google.maps.LatLng(this.props.options.position);
      console.log(latLng);
      streetViewService.getPanoramaByLocation(latLng, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
          if (status === window.google.maps.StreetViewStatus.OK) {
              // ok              
              console.log("it's gucci");
          } else {
              // no street view available in this range, or some error occurred
              playAgain();
              console.log("no image");
          }
      });
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDgZXNZnlgCvEJ2-td1cLhaHptPowenPYg`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <div id={this.props.id} />
    );
  }
}

function playAgain() {
  // Refreshes the page
  window.location.reload();
}

export default Panorama