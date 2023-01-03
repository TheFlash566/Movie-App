import { useState } from "react"
import MovieInfo from "./MovieInfo";

const MovieSearch = () => {

    const [ query, setQuery ] = useState('');
    const [ movies, setMovies ] = useState([]);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e3afee341e8131dfb987a5ddf93799e3&language=en-US&query=${query}&page=1&include_adult=false`

    const getMovies = async (e) => {
        
        try {
            e.preventDefault();
            const result = await fetch(url);
            const data = await result.json();
            setMovies(data.results);
            console.log('my states', query, movies);

            console.log('my data', data);
        } catch (error) {
            console.log('fetch error', error.message);
        }

        
    }

    return(
        <div className="movie-search" id="content" onSubmit={ getMovies }>
            <form className="form-control" style={{textAlign: 'center'}}>
                <label className="form-label" style={{fontSize: '28px',
    fontWeight: 'bold',}}>Movie Name</label>
            <input className="form-input" style={{width: '600px', height: '45px'}} type="text" name="query" id="" required 
            onChange={ e => setQuery(e.target.value) }/>
            <button className="form-bottom" style={{padding: '13px 25px',}} type="submit">Search</button>
            </form>

            <div className="card-list">

                {

                movies.filter(movie => movie.poster_path).map(movie =>
                   <MovieInfo movie={ movie }  key= { movie.id }/> 
                    )
                
                }

            </div>
        </div>
    )
}

export default MovieSearch