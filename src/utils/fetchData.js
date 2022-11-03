export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3c1a2300fdmshb768080d5614752p1897fdjsn2fd612f4926d",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  params: { id: "UCE_M8A5yxnLfW0KghEeajjw" },
  headers: {
    "X-RapidAPI-Key": "3c1a2300fdmshb768080d5614752p1897fdjsn2fd612f4926d",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
