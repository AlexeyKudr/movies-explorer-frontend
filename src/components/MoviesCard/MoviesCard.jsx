import "./MoviesCard.css";

function MoviesCard({ isSaved, movie }) {
    return (
        <section className="movies-card">
            <img className="movies-card__image" alt={movie.name} src={movie.image} />
            <div className="movies-card__block">
                <p className="movies-card__about">{movie.name}</p>
                <p className="movies-card__time">{movie.duration}</p>
            </div>
            {movie.like && !isSaved && <button className="movies-card__like" />}
            {isSaved ? <button className="movies-card__delete" /> : <button className="movies-card__save">Сохранить</button>}
        </section>
    );
}

export default MoviesCard;
