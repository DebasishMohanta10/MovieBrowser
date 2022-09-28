import { Link } from "react-router-dom";
const SearchView = ({keyword,searchResults}) => {


    // TMDB API KEY = 025fd86b8464ce6c9679824b18ca4c1f

    // Example Link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=025fd86b8464ce6c9679824b18ca4c1f&language=en-US&query=starwar&page=1&include_adult=false


    const MovieCard = ({movie}) => {
        const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
        const detailUrl = `/movies/${movie.id}`;
        return (
            <div className="col-lg-2 col-sm-10 col-md-3">
                <div className="card mb-5">
                    <img src={posterUrl} className="card-img-top img-fluid" alt={movie.original_title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                    </div>
                </div>
            </div>
        )
    }

    const resultHtml = searchResults.map((result,i) => {
        return (
            <MovieCard movie={result} key={i}></MovieCard>
        )
    })

    const title = `You are Searching For: ${keyword}`;
    console.log(searchResults); 
    return (
        
        <div>
            <div className="py-5 px-5">
                <h1>{title}</h1>
            </div>
            { resultHtml && 
                <div className="container">
                    <div className="row">
                       {resultHtml} 
                    </div>
                </div>
            }
        </div>
    
    )
}

export default SearchView;