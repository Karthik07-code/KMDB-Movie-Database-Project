import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/blank.png";

export function MovieDetails() {
  const params = useParams();
  const [movie, setMovies] = useState({});
  const key = `37752c76a5af5e13ebe10f049f679f22`;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : backup;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((jsonData) => setMovies(jsonData))
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    document.title = `${movie.title}`;
  });

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} alt="" className="img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>
          {movie.genres ? (
            <p className="d-flex gap-3">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="badge bg-danger">
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i>
            {movie.vote_average}|{" "}
            <i className="bi bi-pepople-fill text-success"></i>
            {movie.vote_count} reviews
          </p>

          <table className="table table-bordered w-50 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{movie.runtime}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
