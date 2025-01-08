import { NavLink, useNavigate } from "react-router-dom";
// import {App} from "../App.css"

export const Header = () => {
  const navigator = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search", e.target.value);
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`);
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark shadow-lg">
      <div className="container-fluid">
        <a to="/" className="navbar-brand fs-3 text-light font-weight-bold">
          <i className="bi bi-camera-reels m-2"></i> KMDB
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-light p-2 hover-underline-animation"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies/top"
                className="nav-link text-light p-2 hover-underline-animation"
              >
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies/popular"
                className="nav-link text-light p-2 hover-underline-animation"
              >
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies/upcoming"
                className="nav-link text-light p-2 hover-underline-animation"
              >
                Upcoming
              </NavLink>
            </li>
          </ul>

          <form onSubmit={handleSearch} className="d-flex align-items-center">
            <div className="input-group w-75">
              <input
                type="search"
                className="form-control rounded-pill py-2 px-3 border-0 shadow-sm"
                placeholder="Quick Search"
                name="search"
                style={{
                  outline: "none",
                  boxShadow: "none",
                  transition: "width 0.4s ease-in-out",
                }}
              />
              <button
                className="btn btn-outline-light rounded-circle shadow-sm ms-2"
                type="submit"
                style={{
                  borderRadius: "50%",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};
