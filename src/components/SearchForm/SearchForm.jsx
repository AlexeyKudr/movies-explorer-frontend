import "./SearchForm.css";
import tumbler from "../../images/tumbler.svg";

function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__block">
                <input className="search-form__input" type="text" placeholder="Фильм" />
                <button className="search-form__button" type="submit" />
            </div>
            <div className="search-form__filter">
                <button className="search-form__checkbox" type="button">
                    <img className="search-form__tumbler" src={tumbler} alt="тумблер" />
                </button>
                <p className="search-form__title">Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;
