import React, { Component } from "react";

// Firebase
import * as firebase from 'firebase'
import config from '../firebase'

import { Map, InfoWindow, Marker, GoogleApiWrapper, GoogleAPI } from "google-maps-react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = { loading: true}
    firebase.initializeApp(config)
  }
  componentDidMount () {
    const CasablancaRef = firebase.database().ref('villes')

    CasablancaRef.on('value', snapshot => {
      this.setState({
        villes: snapshot.val(),
        loading: false
      })
    })
  }

  render () {
    if (this.state.loading) {
      return (
        <p>Je suis en train de charger.</p>
      )
    }
    const villes = Object.keys(this.state.villes).map(key => {
      return <p key={key}>{this.state.villes[key].Casablanca}</p>
    })
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 20px)"
        }}
      >
        <Map style={{}} google={this.props.google} zoom={8} initialCenter={{lat: 33.5731104, lng: -7.5898434}}>
        <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'CASA'}
    position={{lat: 33.5731104, lng: -7.5898434}} />

    <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'Rabat'}
        position={{lat: 33.9715904, lng: -6.8498129}} />

    <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'Temara'}
            position={{lat: 33.920327, lng: -6.927397}} />

    <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'Kenitra'}
                position={{lat: 34.250000, lng: -6.583333}} />

    <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'Fes'}
                    position={{lat: 34.033333, lng: -5.000000}} />

    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'Oujda'}
                        position={{lat: 34.686667, lng: -1.911389}} />

    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'Tanger'}
                        position={{lat: 35.759465, lng: -5.833954}} />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAIASIuKkCZjrsg7WgGDTNtQhVR8O87U6M",
  v: "3.30"
})(App);
