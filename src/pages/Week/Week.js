import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Col, Row } from "reactstrap";
import "./Week.scss";
import Spinner from "../../components/Spinner/Spinner";
const Week = ({ weather, loading }) => {
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getDay()}`;
  };

  const getDate = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getDate()}/${
      new Date(timeStamp * 1000).getMonth() + 1
    }`;
  };
  let option = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [isActive, setIsActive] = useState(0);
  const handleActive = (index) => {
    setIsActive(index);
  };

  function getHourAndMinute(timeStamp) {
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
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="right-side__wrapper">
          <Header />
          <section>
            <Row>
              {weather?.daily.map((item, index) => (
                <Col key={index} lg="3" md="6" className="weather__card2 mb-4">
                  <div
                    onClick={() => handleActive(index)}
                    className={
                      isActive === index
                        ? "weather__detail bg-active p-2 rounded-3 bg-active"
                        : "weather__detail p-2 rounded-3"
                    }
                  >
                    <p className="weather__detail-title fs-5 text-black-50">
                      {option[getTime(item.dt)]}, {getDate(item.dt)}
                    </p>
                    <div className="weather__detail-desc text-center">
                      <img
                        className="logo-icon"
                        src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                        alt=""
                      />
                      <p className="fs-6 text-muted fw-bold">
                        {Math.floor(item.temp.min - 273)}° -{" "}
                        {Math.floor(item.temp.max - 273)}°
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </section>
          <section className="weather__daily-info mt-3 mb-5">
            <div className="p-2">
              <div className="fs-5 fw-semibold text-muted mb-4">
                {option[getTime(weather?.daily[isActive].dt)]},{" "}
                {getDate(weather?.daily[isActive].dt)}
              </div>
              <Row>
                <Col lg="6">
                  <p className="fs-6 fw-semibold text-muted">
                    Temp current :{" "}
                    {Math.floor(weather?.daily[isActive].temp.day - 273)} °C
                  </p>
                  <p className="fs-6 fw-semibold text-muted">
                    Temp : {Math.floor(weather?.daily[isActive].temp.min - 273)}{" "}
                    °C - {Math.floor(weather?.daily[isActive].temp.max - 273)}{" "}
                    °C
                  </p>
                  <p className="fs-6 fw-semibold text-muted">
                    Humidity : {Math.floor(weather?.daily[isActive].humidity)} %
                  </p>
                  <p className="fs-6 fw-semibold text-muted">
                    Wind speed :{" "}
                    {Math.floor(weather?.daily[isActive].wind_speed)} km/h
                  </p>
                </Col>
                <Col lg="6">
                  <p className="fs-6 fw-semibold text-muted">
                    Sunrise :{" "}
                    {getHourAndMinute(weather?.daily[isActive].sunrise)}
                  </p>
                  <p className="fs-6 fw-semibold text-muted">
                    Sunset : {getHourAndMinute(weather?.daily[isActive].sunset)}
                  </p>
                  <p className="fs-6 fw-semibold text-muted">
                    Description :{" "}
                    {weather?.daily[isActive].weather[0].description}
                  </p>
                  <p className="fs-6 fw-semibold text-muted">
                    Atmospheric pressure :{" "}
                    {Math.floor(weather?.daily[isActive].pressure)} hPa
                  </p>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Week;
