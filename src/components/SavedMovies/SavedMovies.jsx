import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import words from "../../images/33 words.jpg";
import cinema from "../../images/100 yers.jpg";
import banksy from "../../images/Banksy.jpg";

const moviesMy = [
    {
        id: "1",
        name: "33 слова о дизайне",
        duration: "1ч 17м",
        image: words,
        like: false,
    },
    {
        id: "2",
        name: "Киноальманах «100 лет дизайна»",
        duration: "1ч 17м",
        image: cinema,
        like: true,
    },
    {
        id: "3",
        name: "В погоне за Бенкси",
        duration: "1ч 17м",
        image: banksy,
        like: false,
    },
];

function Movies() {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList movies={moviesMy} isSaved={true} />
        </section>
    );
}

export default Movies;
