export const arraysEqual = (a: string[], b: string[]) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export interface userData {
  games: wordleGame[];
}

export interface wordleGame {
  numberOfRows: number;
  date: Date;
  guesses: string[];
}

export interface wordleGameString {
  numberOfRows: string;
  date: string;
  guesses: string[]
}

export const getUserData = (): userData => {
  const load = localStorage.getItem("data");
  if (load !== null) {
    const data = JSON.parse(load);
    data.games = data.games.map(({numberOfRows, date, guesses} : wordleGameString)=> ({
      numberOfRows: parseInt(numberOfRows),
      date: new Date(Date.parse(date)),
      guesses: guesses,
    }))
    console.log(data);
    return data;
  }
  return { games: [] };
};
