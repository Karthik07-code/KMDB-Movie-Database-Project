import React from "react";
// import backup from "../assets/backup.jpg";
import blank from "../assets/blank.png";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { poster_path, id, overview, title, vote_average, vote_count } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : blank;
  const imageStyle = poster_path ? {} : { height: "100%" };
  return (
    // Card img 
    <div className="col">
      <div className="card shadow-sm" title={title} style={{ height: "100%" }}>
        <img
          src={image}
          alt=""
          className="card-img-top"
          style={{ height: "70%" , width: "100%" }}
        />
        
        {/* Card Title & Overview */}
        <div className="card-body">
          <h5 className="card-card-title text-dark  fw-bold  text-overflow-1">
            {title}
          </h5>
          <p className="card-text text-overflow-2">{overview}</p>

          {/* Show More Button */}
          <div className="d-flex align-items-center justify-content-between">
            <Link
              to={`/movie/${id}`}
              className="btn btn-sm btn-outline-primary stretched-link"
            >
              Show More
            </Link>

            {/* Rating  & Reviews*/}
            <small>
              <i className="bi bi-star-fill text-warning "></i>
              {vote_average} | {vote_count} reviews
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
