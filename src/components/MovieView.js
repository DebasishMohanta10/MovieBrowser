import { useState } from "react";
import { useParams } from "react-router-dom";

import { useEffect } from "react";

const MovieView = () => {
    const { id } = useParams();
    const [movieDetails,setMovieDetails] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        console.log("Make an Api REQUEST",id);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=025fd86b8464ce6c9679824b18ca4c1f&language=en-US`).then(response => response.json()).then(data => {
            setMovieDetails(data)
            setIsLoading(false)
        })
    },[id]);

    function renderMovieDetails(){
        if(isLoading){
            return ''
        }
        if(movieDetails){
            const posterPath = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`;
            const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
            return (
                <div>
                    <div className="py-5 px-5 movie-title text-light" style={{background: `url(${backdropUrl})`}}>
                            <h1>{movieDetails.original_title}</h1>
                    </div>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="" className="img-fluid"/>
                            </div>
                            <div className="col-md-9">
                                <div className="px-4">
                                    <h2>{movieDetails.original_title}</h2><br/>
                                    <h5 style={{color: "green"}}>Status: {movieDetails.status}</h5>
                                    <h5>Popularity: {movieDetails.popularity}</h5>
                                    <h5>Release Date: {movieDetails.release_date}</h5>
                                    <br/>
                                    <p style={{fontSize: "22px"}}>{movieDetails.overview}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }


    return renderMovieDetails()
}

export default MovieView;