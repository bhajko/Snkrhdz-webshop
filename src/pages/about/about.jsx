import React from "react";
import "./about.scss";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "../../mapStyles";

function Maps() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 47.511017, lng: 19.054249 }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        key={1}
        position={{ lat: 47.511017, lng: 19.054249 }}
        // icon={{
        //   url: "/diamond.svg",
        //   scaledSize: new window.google.maps.Size(40, 40)
        // }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Maps));

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-pic"></div>
      <div className="about-us">
        <div className="about-text">
          <h3>About us</h3>
          <p>
            We work exclusively with trusted manufacturers guaranteeing the
            latest range, including limited must-havy. The selection in our
            store is very subjective, based on timeless designs, functionality,
            natural materials and original solutions.
          </p>
          <br />
          <p>
            We do not rest on our laurels, so we still expanding with new makes
            and models, so that the displayed products always reflect the world
            stage.
          </p>
        </div>
        <div className="about-map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
