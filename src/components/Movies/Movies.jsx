import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import words from "../../images/33png.png";
import cinema from "../../images/100 yers.jpg";
import banksy from "../../images/Banksy.jpg";
import reality from "../../images/Banksy reality.jpg";
import run from "../../images/Run.jpg";
import book from "../../images/booktrader.jpg";
import gimme from "../../images/Gimme.jpg";
import germany from "../../images/Germany.jpg";
import girl from "../../images/Jannies.jpg";
import jump from "../../images/Jump.jpg";
import pi from "../../images/Pi Jay.jpg";
import waves from "../../images/Waves.jpg";

const movies = [
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
    {
        id: "4",
        name: "Баския: Взрыв реальности",
        duration: "1ч 17м",
        image: reality,
        like: false,
    },
    {
        id: "5",
        name: "Бег это свобода",
        duration: "1ч 17м",
        image: run,
        like: false,
    },
    {
        id: "6",
        name: "Книготорговцы",
        duration: "1ч 17м",
        image: book,
        like: true,
    },
    {
        id: "7",
        name: "Когда я думаю о Германии ночью",
        duration: "1ч 17м",
        image: germany,
        like: false,
    },
    {
        id: "8",
        name: "Gimme Danger: История Игги и The Stooges",
        duration: "1ч 17м",
        image: gimme,
        like: false,
    },
    {
        id: "9",
        name: "Дженис: Маленькая девочка грустит",
        duration: "1ч 17м",
        image: girl,
        like: false,
    },
    {
        id: "10",
        name: "Соберись перед прыжком",
        duration: "1ч 17м",
        image: jump,
        like: false,
    },
    {
        id: "11",
        name: "Пи Джей Харви: A dog called money",
        duration: "1ч 17м",
        image: pi,
        like: false,
    },
    {
        id: "12",
        name: "По волнам: Искусство звука в кино",
        duration: "1ч 17м",
        image: waves,
        like: false,
    },
];

function Movies() {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList movies={movies} isSaved={false} />
            <div className="movies__more">
                <button className="movies__button" type="button">
                    Ещё
                </button>
            </div>
        </section>
    );
}

export default Movies;
