import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from "./Movie";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export class Moviecontainer extends Component {
  //we just take articles as name instead of result

  static deafultProps = {
    title: "",
    overview: "",
    release_date: "",
    poster_path: "",
    id: "",
    pageSize: 5,
    sort:"vote_count.desc"
  };
  constructor() {
    super();
    this.state = {
      results: [],
      loading: false,
      page: 1,
      total_results: 0,
    };
  }
  async updateMovie() {
    this.props.setProgress(10);
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.props.apikey}&language=en-US&sort_by=${this.props.sort}&include_adult=false&include_video=false&page=${this.state.page}&with_watch_monetization_types=flatrate`;
    this.setState({ loading: true });
    let data = await fetch(url)
    this.props.setProgress(50);;
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      results: parsedData.results,
      total_pages: parsedData.total_pages,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // let url=`https://api.themoviedb.org/3/discover/movie?api_key=2f5af7d7b861e977bccc7e436d8bc937&language=en-US&sort_by=${this.props.sort}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     results:parsedData.results
    //     });

    this.updateMovie();
  }
  handleNextClick = async () => {
    console.log("Next");
    this.setState({
      page: this.state.page + 1,
    });
    this.updateMovie();
  };
  handlePrevClick = async () => {
    console.log("Previous");
    this.setState({
      page: this.state.page - 1,
    });
    this.updateMovie();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=2f5af7d7b861e977bccc7e436d8bc937&language=en-US&sort_by=${this.props.sort}&include_adult=false&include_video=false&page=${this.state.page}&with_watch_monetization_types=flatrate`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      results: this.state.results.concat(parsedData.results),
      total_pages: parsedData.total_pages,
      loading: false,
    });
  };
  render() {
    return (
      //  <div className="container my-3">
      //       <h2 className="text-center my-5">Capital Movies Production</h2>
      //       {this.state.loading && <Spinner/>}
      //       <div className="row ">
      //       {!this.state.loading && this.state.results.map((element) => {
      //           return (
      //             <div className="col-md-4" key={element.id}>
      //               <Movie
      //                 title={element.title?element.title:"Goto below link to check"}

      //                 overview={element.overview?element.overview.slice(0,100):"Goto below link to check"}
      //                 release_date={element.release_date?element.release_date:""}
      //                 poster_path={element.poster_path?element.poster_path:"/c311sN931DixuZRer0JGYCwpx9N.jpg"}
      //                     id={element.id?element.id:""}
      //                     popularity={element.popularity?element.popularity:0}
      //                     watchProvider={`https://api.themoviedb.org/3/movie/${element.id}/watch/providers?api_key=2f5af7d7b861e977bccc7e436d8bc937`?`https://api.themoviedb.org/3/movie/${element.id}/watch/providers?api_key=2f5af7d7b861e977bccc7e436d8bc937`:`https://api.themoviedb.org/3/movie/27205/watch/providers?api_key=2f5af7d7b861e977bccc7e436d8bc937`}
      //               />
      //             </div>
      //           );
      //         })}
      //   <div className="conatiner d-flex justify-content-between">
      //           <button
      //             disabled={this.state.page <= 1}
      //             type="button"
      //             className="btn btn-dark"
      //             onClick={this.handlePrevClick}
      //           >
      //             &larr;previous
      //           </button>
      //           <button
      //           disabled={this.state.page + 1 > Math.ceil(this.state.total_pages)}
      //             type="button"
      //             className="btn btn-dark next"
      //             onClick={this.handleNextClick}
      //           >
      //             Next&rarr;
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      <>
        <h2 className="text-center my-5">Capital Movies Production</h2>
        <InfiniteScroll
          dataLength={this.state.results.length}
          next={this.fetchMoreData}
          hasMore={this.state.results.length !== this.state.total_results}
          loader={<Spinner />}
        >
          {this.state.loading && <Spinner />}
          <div className="container">
            <div className="row">
              {this.state.results.map((element) => {
                return (
                  <div className="col-md-4" key={element.id}>
                    <Movie
                      title={
                        element.title
                          ? element.title
                          : "Goto below link to check"
                      }
                      overview={
                        element.overview
                          ? element.overview.slice(0, 100)
                          : "Goto below link to check"
                      }
                      release_date={
                        element.release_date ? element.release_date : ""
                      }
                      poster_path={
                        element.poster_path
                          ? element.poster_path
                          : "/c311sN931DixuZRer0JGYCwpx9N.jpg"
                      }
                      id={element.id ? element.id : ""}
                      popularity={element.popularity ? element.popularity : 0}
                      watchProvider={
                        `https://api.themoviedb.org/3/movie/${element.id}/watch/providers?api_key=2f5af7d7b861e977bccc7e436d8bc937`
                          ? `https://api.themoviedb.org/3/movie/${element.id}/watch/providers?api_key=2f5af7d7b861e977bccc7e436d8bc937`
                          : `https://api.themoviedb.org/3/movie/27205/watch/providers?api_key=2f5af7d7b861e977bccc7e436d8bc937`
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default Moviecontainer;
