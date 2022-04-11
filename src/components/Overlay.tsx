import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import "../style/overlay.css";
import * as Icon from "react-bootstrap-icons";
import "../style/overlay.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { setHidden } from "../redux/statistics/statAction";
Chart.register(...registerables);

const Overlay = () => {
  const labels = ["1", "2", "3", "4", "5", "6"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 255, 255)",

        data: [0, 2, 14, 3, 2, 2],
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    scales: {
      x: {
        grid: {
          color: "#444444",
        },
        ticks: {
          color: "whitesmoke",
        },
      },
      y: {
        grid: {
          color: "#444444",
        },
        ticks: {
          color: "whitesmoke",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const dispatch = useDispatch();
  const hidden = useSelector((state: RootState) => state.stat.hidden);

  const timeToNewDay = () => {
    /**
     * Returns the next date
     */
    const d = new Date();
    d.setDate(d.getDate() + 1);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    return d;
  };

  const renderer = ({ hours, minutes, seconds }: any) => (
    <span>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );

  return (
    <>
      <div className={"overlay-back " + hidden}>
      <div className={"overlay"}>
        <div className="top-overlay">
          <Icon.X color="whitesmoke" size={30} onClick={() => {dispatch(setHidden("hidden"))}}></Icon.X>
        </div>
        <div className="stat-text">
          <h5>Neste ordleik kommer om:</h5>
        </div>
        <div className="counter-div">
          <Countdown
            className="countdown-time"
            date={timeToNewDay()}
            renderer={renderer}
          ></Countdown>
        </div>
        <div className="stat-text">
          <h5>Statistikk:</h5>
        </div>
        <div className="win-stats">
          <div className="win-numbers">
            <p>12</p>
            <p>100%</p>
            <p>5</p>
            <p>2</p>
          </div>
          <div className="win-labels">
            <p>Spill spillt</p>
            <p>Vinn%</p>
            <p>Høyeste streak</p>
            <p>Nåverende Streak</p>
          </div>
        </div>
        <div className="stat-text">
          <h5>Distrubisjon av gjett</h5>
        </div>
        <Bar data={data} options={options} />
      </div>
      <div className="behind-overlay" />
      </div>
    </>
      
  );
};

export default Overlay;
