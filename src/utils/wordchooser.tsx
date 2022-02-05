import React from "react";
import songlist from "./resources/5_bokstaver.json";

// note this will be async
function getRandomLine(): string {
  const bigPrime = 872604219834575166909558254717;
  const numOfWords = songlist.length;

  const day = 1000 * 60 * 60 * 25;

  // Divide Time with a year
  const d = new Date();
  let days = Math.round(d.getTime() / day);
  return songlist[(days * bigPrime) % numOfWords];
}

export default getRandomLine;
