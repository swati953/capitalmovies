import React, { Component } from "react";
import "./movie.css";
import Singlemovie from "./Singlemovie";
export class Movie extends Component {
  render() {
    
    let { title, release_date, poster_path, overview, popularity, id} =this.props;
    // url1 = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=2f5af7d7b861e977bccc7e436d8bc937`;
    return (
      <div>
        <div className="card my-2" style={{ width: "18rem" }}>
          <img
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title title">{title}</h5>
            <p className="card-text date">
              <small className="text-muted">{release_date}</small>
            </p>
            <p className="card-text overview">{overview}...</p>
            <div className="likeRating">
              <button>
                {" "}
                <i className="fas fa-heart size1">&#9825;</i>
              </button>
              {/* <i className="fas fa-heart size1">&hearts;</i> */}
              <p className="rating">{popularity}k</p>
            </div>
           <Singlemovie watchProvider={`https://www.themoviedb.org/movie/${id}-${title}/watch?locale=AR`}/>
            </div>
        </div>
      </div>
    );
  }
}

export default Movie;
