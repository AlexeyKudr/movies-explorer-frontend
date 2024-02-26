import React from "react";
import "./Navigation.css";

function Navigation({ onClose }) {
    return (
        <section className="navigation">
            <button className="navigation__close" onClick={onClose} type="button" />
            <div className="navigation__container">
                <div className="navigation__about">
                    <a href="/" className="navigation__link">
                        Главная
                    </a>
                    <a href="/movies" className="navigation__link">
                        Фильмы
                    </a>
                    <a href="/saved-movies" className="navigation__link">
                        Сохранённые фильмы
                    </a>
                </div>
                <button className="navigation__account-box">
                    <a href="/profile" className="navigation__account-title">
                        Аккаунт
                    </a>
                </button>
            </div>
        </section>
    );
};

export default Navigation;
