import React, { useState } from "react";
import "./SearchForm.css";
import tumbler from "../../images/tumbler.svg";
import tumblerOff from "../../images/tumbler-small off.png"

function SearchForm() {
    const [isTumbler, setTumbler] = useState(true);

    const onActive = () => {
        setTumbler(!isTumbler);
      };


    return (
        <section className="search-form">
            <form className="search-form__block">
                <input className="search-form__input" type="text" placeholder="Фильм" required />
                <button className="search-form__button" type="submit" />
            </form>
            <div className="search-form__filter">
                <button className={`search-form__tumbler ${isTumbler ? "on" : ""}`} type="button" onClick={onActive} >
                    <img className="search-form__tumbler" src={isTumbler ? tumbler : tumblerOff} alt="тумблер" />
                </button>
                <p className="search-form__title">Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;
