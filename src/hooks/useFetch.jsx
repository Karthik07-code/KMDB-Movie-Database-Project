import { useState, useEffect } from "react";
export const UseFetch = (apipath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const key = `37752c76a5af5e13ebe10f049f679f22`;
  // console.log(key);

  const url = `https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((jsonData) => setData(jsonData.results))
        .catch((error) => {
          console.error("Fetch error:", error);
          setData([]);
        });
    }
    fetchMovies();
  }, [url]);

  return { data };
};
