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
import { getUserData } from "../utils/helpFunctions";
import { summary } from 'date-streaks';
Chart.register(...registerables);

const Overlay = () => {

  const labels = ["1", "2", "3", "4", "5", "6", "7+"];

  
  const renderer = ({ hours, minutes, seconds }: any) => (
    <span>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );

  const getNumOfOccurences = (guesses: Array<number>) => {
    const counts = [0, 0, 0, 0, 0, 0, 0]
    guesses.forEach(guess => counts[guess - 1] += 1);
    return counts;
  }

  const statData = () => {
    const data = getUserData();
    console.log(data);
    const win = Math.round(
      (data.games.filter((game) => game.numberOfRows <= 5).length /
      data.games.length) *
      100
      );
      const plays = data.games.length;
      const dates = data.games.filter(game => game.numberOfRows < 7).map((games) => games.date);
      const streakData = summary({dates});
      const occ = getNumOfOccurences(data.games.map(game => game.numberOfRows));
      return [plays, win, streakData.longestStreak, streakData.currentStreak, occ];
    };
    
    const statistics = statData();
    
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 255, 255)",
  
          data: statistics[4],
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      indexAxis: "y" as const,
      scales: {
        x: {
          grid: {
            color: "#444444",
          },
          ticks: {
            color: "whitesmoke",
            autoSkip: false,
            callback: function (value: any) { if (Number.isInteger(value)) { return value; } },
            stepSize: 1
          },
        },
        y: {
          grid: {
            color: "#444444",
          },
          ticks: {
            color: "whitesmoke",
            autoSkip: false,
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
    
    return (
      <>
      <div className={"overlay-back " + hidden}>
        <div className={"overlay"}>
          <div className="top-overlay">
            <Icon.X
              color="whitesmoke"
              size={30}
              onClick={() => {
                dispatch(setHidden("hidden"));
              }}
            ></Icon.X>
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
              <p>{statistics[0]}</p>
              <p>{statistics[1].toString() + "%"}</p>
              <p>{statistics[2].toString()}</p>
              <p>{statistics[3].toString()}</p>
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
          <Bar data={data} options={options} className="chart" />
        </div>
        <div className="behind-overlay" />
      </div>
    </>
  );
};

export default Overlay;
