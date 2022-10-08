import React from "react";
import { Col, Row } from "reactstrap";
import "./Today.scss";
import Sun from "../../icons/sunny.svg";
import Wind from "../../icons/wind.svg";
import Day from "../../icons/day.svg";
import Night from "../../icons/night.svg";
import Humidity from "../../icons/humidity.svg";
import Temp from "../../icons/temp.svg";
import Pressure from "../../icons/pressure.svg";
import Header from "../../components/Header/Header";

const Today = ({ weather }) => {
  function getTime(timeStamp) {
    var date = new Date(timeStamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Check whether AM or PM
    var newformat = hours >= 12 ? "PM" : "AM";

    // Find current hour in AM-PM Format
    hours = hours % 12;

    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes} ${newformat}`;
  }
  return (
    <div className="right-side__wrapper">
      <Header />
      <section>
        <Row>
          <Col lg="4" md='6' className="weather__card mb-4">
            <div className="weather__detail p-2 rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                UV index
              </p>
              <div className="weather__detail-desc text-center">
                <img className="logo-icon" src={Sun} alt="" />
                <p className="fs-3 fw-bold">0</p>
              </div>
            </div>
          </Col>
          <Col lg="4" md='6' className="weather__card mb-4">
            <div className="weather__detail p-2 mb-4 rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Wind Status
              </p>
              <div className="weather__detail-desc text-center">
                <img className="logo-icon" src={Wind} alt="" />
                <p className="fs-3 fw-bold">{weather?.current?.wind_speed} km/h</p>
              </div>
            </div>
          </Col>
          <Col lg="4" md='6' className="weather__card mb-4">
            <div className="weather__detail p-2  rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Sunrise & Sunset
              </p>
              <div className="weather__detail-desc>">
                <div className="d-flex gap-3 align-items-center">
                  <img className="logo-icon" src={Day} alt="" />
                  <p className="fs-3 fw-bold">
                    {getTime(weather?.current?.sunrise)}
                  </p>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <img className="logo-icon" src={Night} alt="" />
                  <p className="fs-3 fw-bold">
                    {getTime(weather?.current?.sunset)}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md='6' className="weather__card mb-4">
            <div className="weather__detail p-2  rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Humidity
              </p>
              <div className="weather__detail-desc text-center">
                <img className="logo-icon" src={Humidity} alt="" />
                <p className="fs-3 fw-bold">{weather?.current?.humidity} %</p>
              </div>
            </div>
          </Col>
          <Col lg="4" md='6' className="weather__card mb-4">
            <div className="weather__detail p-2  rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Visibility
              </p>
              <div className="weather__detail-desc text-center">
                <img className="logo-icon" src={Pressure} alt="" />
                <p className="fs-3 fw-bold">{weather?.current?.visibility / 1000} km</p>
              </div>
            </div>
          </Col>
          <Col lg="4" md='6' className="weather__card mb-4">
            <div className="weather__detail p-2  rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Pressure
              </p>
              <div className="weather__detail-desc text-center">
                <img className="logo-icon" src={Temp} alt="" />
                <p className="fs-3 fw-bold">{weather?.current?.pressure} hPa</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Today;
