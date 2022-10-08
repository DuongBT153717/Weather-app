import React from "react";
import { Col, Row } from "reactstrap";
import "./RightSide.scss";
import Sun from "../../icons/sunny.svg";
import Wind from "../../icons/wind.svg";
import Day from "../../icons/day.svg";
import Night from "../../icons/night.svg";
import Humidity from "../../icons/humidity.svg";
import Temp from "../../icons/temp.svg";
import Pressure from "../../icons/pressure.svg";

const RightSide = ({ weather }) => {
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
}
  return (
    <div className="right-side__wrapper">
      <div className="header">
        <div className="header__navbar">
          <ul className="gap-3">
            <li className="active">Today</li>
            <li>Week</li>
            <li>Hour</li>
          </ul>
        </div>
        <div className="header__logo">
          <img
            className="rounded-circle"
            src="https://i.pinimg.com/originals/89/54/38/895438247efa788551d1919d44f176ca.png"
            alt=""
          />
        </div>
      </div>
      <section>
        <Row>
          <Col lg="4" className="weather__card mb-4">
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
          <Col lg="4" className="weather__card mb-4">
            <div className="weather__detail p-2 mb-4 rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Wind Status
              </p>
              <div className="weather__detail-desc text-center">
                <img className="logo-icon" src={Wind} alt="" />
                <p className="fs-3 fw-bold">{weather?.wind?.speed} km/h</p>
              </div>
            </div>
          </Col>
          <Col lg="4" className="weather__card mb-4">
            <div className="weather__detail p-2  rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Sunrise & Sunset
              </p>
              <div className="weather__detail-desc>">
                <div className="d-flex gap-3 align-items-center">
                  <img className="logo-icon" src={Day} alt="" />
                  <p className="fs-3 fw-bold">
                    {getTime(weather?.sys?.sunrise)} pm
                  </p>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <img className="logo-icon" src={Night} alt="" />
                  <p className="fs-3 fw-bold">{getTime(weather?.sys?.sunset)} am</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" className="weather__card mb-4">
            <div className="weather__detail p-2  rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Humidity
              </p>
              <div className="weather__detail-desc text-center">
                <img className="logo-icon" src={Humidity} alt="" />
                <p className="fs-3 fw-bold">{weather?.main?.humidity} %</p>
              </div>
            </div>
          </Col>
          <Col lg="4" className="weather__card mb-4">
            <div className="weather__detail p-2  rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Visibility
              </p>
              <div className="weather__detail-desc text-center">
                <img className="logo-icon" src={Pressure} alt="" />
                <p className="fs-3 fw-bold">{weather?.visibility / 1000} km</p>
              </div>
            </div>
          </Col>
          <Col lg="4" className="weather__card mb-4">
            <div className="weather__detail p-2  rounded-3">
              <p className="weather__detail-title fs-5 text-black-50">
                Pressure
              </p>
              <div className="weather__detail-desc text-center">
                <img className="logo-icon" src={Temp} alt="" />
                <p className="fs-3 fw-bold">{weather?.main?.pressure} hPa</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default RightSide;
