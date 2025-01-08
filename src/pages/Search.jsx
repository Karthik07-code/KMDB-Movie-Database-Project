import React from "react";
import { useEffect } from "react";
import { Card } from "../components/Card";
import { UseFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
 
export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = UseFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search Results for ${queryTerm}`;
  });


  return (
    <main className="container"> 
      <h4 className="text-danger py-2 border-bottom">
        {movies.length==0 ? `No Results Found for "${queryTerm}"`: `Results for "${queryTerm}"`}
      </h4>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 py-2 ">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
};
