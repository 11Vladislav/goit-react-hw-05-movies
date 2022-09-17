import { useEffect, useState } from 'react';
import { StyledLink, MovieList, MovieItem, Image } from './HomePage.styled';
import * as Api from '../../api/movies-api';
import PropTypes from 'prop-types';

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        Api.fetchPopularMovies().then(movies => setMovies(movies))
        
    }
    , []);

    if (!movies) {
        return;
      }

    return (
        <>
         <h1>Trending now</h1>
            <MovieList> 
            {movies.map(({ id, title, release_date, poster_path }) => {
                return <MovieItem key={id}>

                    <StyledLink to={`/movies/${id}`}>
                    <Image src={
                     `https://image.tmdb.org/t/p/w300${poster_path}`}  />
                        {title}</StyledLink>
                    <p>{release_date}</p>
                </MovieItem>
            }
            )}
            </MovieList>
        </>
    )

}
export default HomePage;

HomePage.propTypes = {
    movies: PropTypes.array
}