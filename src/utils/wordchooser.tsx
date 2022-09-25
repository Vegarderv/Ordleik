import React from "react";
import songlist from "./resources/5_bokstaver_gjett.json";

// note this will be async
function getRandomLine(): string {
  const bigPrime = 872604219834575166909558254717;
  const numOfWords = songlist.length;

  const day = 1000 * 60 * 60 * 24;

  // Divide Time with a year
  const d = new Date();
  let days = Math.floor((d.getTime() - (2 * 60 * 60 * 1000)) / day);
  return songlist[(days * bigPrime) % numOfWords];
}

export default getRandomLine;
