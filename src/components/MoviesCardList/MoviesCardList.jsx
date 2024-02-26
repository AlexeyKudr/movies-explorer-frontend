import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isSaved, movies }) {
    return (
        <section className="movies-list">
            {movies.map((movie) => (
                <MoviesCard key={movie.id} isSaved={isSaved} movie={movie} />
            ))}
        </section>
    );
}

export default MoviesCardList;
