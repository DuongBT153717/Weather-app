import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { APIKey } from "../../common/apis/weatherAPIKey";
import Hour from "../../pages/Hour/Hour";
import Today from "../../pages/Today/Today";
import Week from "../../pages/Week/Week";
import '../../pages/Today/Today.scss'
import LeftSide from "../LeftSide/LeftSide";
const Layout = () => {
  const [weather, setWeather] = useState();
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState("ha noi");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
      setLoading(true)
      axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`
      ).then(res => {
        setCountry(res.data);
        return [res.data[0].lat,res.data[0].lon]
      }).then((data) => axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0]}&lon=${data[1]}&exclude=minutely,alerts&appid=${APIKey}`))
      .then(res => {
        setWeather(res.data)
        setLoading(false)
      })
  }, []);
  
  return (
    <Row style={{ height: "100%" }}>
      <Col lg="3" md='12' className="bg-white">
        <LeftSide
          city={city}
          setCity={setCity}
          weather={weather}
          country={country}
          setWeather={setWeather}
          setCountry={setCountry}
      
        />
      </Col>
      <Col lg="9" md='12' className="right-col" style={{ height: "100%", overflowY: "scroll", backgroundColor: "rgb(246, 246, 248)" }}>
        <Routes>
          <Route path="/" element={<Today weather={weather} />} />
          <Route path="/weather/week" element={<Week loading={loading} weather={weather} />} />
          <Route path="/weather/hour" element={<Hour loading={loading} weather={weather} />} />
        </Routes>
      </Col>
    </Row>
  );
};

export default Layout;
