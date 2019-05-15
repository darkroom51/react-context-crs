import React, { Component } from 'react';
import styled from "styled-components";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Title from './Title';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto; 

  img{
    filter: grayscale(100%);
  }
`;

export default class SimpleMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <StyledWrapper id="scrollToMap">
      <Title title="Find Us" dark={false} />
        <Map style={{height:400}} center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Non existing RentCar
          </Popup>
          </Marker>
        </Map>
      </StyledWrapper>
    )
  }
}