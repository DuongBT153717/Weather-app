import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import Spinner from "../../components/Spinner/Spinner";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const Hour = ({ weather, loading }) => {
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
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="right-side__wrapper">
          <Header />
          <Line
            data={{
              labels: weather?.hourly.slice(0, 24).map((s) => getTime(s.dt)),
              datasets: [
                {
                  label: "Temp (°C)",
                  data: weather?.hourly
                    .slice(0, 24)
                    .map((s) => (s.temp - 273).toFixed(2)),
                  backgroundColor: "transparent",
                  borderColor: "green",
                  tension: 0.4,
                  fill: true,
                  pointStyle: "rect",
                  pointBorderColor: "blue",
                  pointBackgroundColor: "#fff",
                  showLine: true,
                },
                {
                  label: "Feel like (°C)",
                  data: weather?.hourly
                    .slice(0, 24)
                    .map((s) => (s?.feels_like - 273).toFixed(2)),
                  backgroundColor: "transparent",
                  borderColor: "purple",
                  tension: 0.4,
                  fill: true,
                  pointStyle: "rect",
                  pointBorderColor: "blue",
                  pointBackgroundColor: "#fff",
                  showLine: true,
                },
              ],
            }}
          />
        </div>
      )}
    </>
  );
};

export default Hour;
