import React from "react";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { UseFetch } from "../hooks/useFetch";
// import { useSearchParams } from 'react-router-dom';

export const MovieList = ({ title, apiPath}) => {
  const {data:movies} = UseFetch(apiPath);
  useEffect(() => {
    document.title = title;
  }); 

  return (
    <div>
      <main className="container">
        <h4 className="text-primary fw-bolder py-3 border-bottom  border-primary mb-4">{title}</h4>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 py-2 ">
        {movies.map((movie)=>{
          return <Card key = {movie.id} movie={movie}/>
        }
        )}
        </div>
      </main>
    </div>
  );
};
