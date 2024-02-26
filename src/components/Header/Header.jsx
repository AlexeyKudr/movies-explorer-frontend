import React, { useState, useEffect } from "react";
import logo from "../../images/logo__Header.svg";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
    const [isMyPage, setisMyPage] = useState(false);
    const [isOpenMenu, setOpenMenu] = useState(false);
    const location = useLocation();
    const renderHeader = ["/", "/movies", "/saved-movies", "/profile"].includes(location.pathname);

    const onVisible = () => {
        setOpenMenu(!isOpenMenu);
    };

    useEffect(() => {
        setisMyPage(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile");
    }, [location]);

    if (!renderHeader) {
        return null;
    }

    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="логотип" className="header__logo" />
            </Link>
            {renderHeader && (
                <>
                    {isMyPage ? (
                        <>
                            <div className="header__navMovies">
                                <Link to="/movies" className="header__movies">
                                    Фильмы
                                </Link>
                                <Link to="/saved-movies" className="header__savedMovies">
                                    Сохранённые фильмы
                                </Link>
                            </div>
                            <Link to="/profile" className="header__account">
                                Аккаунт
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className="header__auth">
                                <a href="/signup" className="header__registration">
                                    Регистрация
                                </a>
                                <a href="/signin" className="header__enter">
                                    Войти
                                </a>
                            </div>
                        </>
                    )}
                    {isMyPage && <button className="navigation__button" onClick={onVisible} />}
                    <div className={`navigation__burger-menu ${isOpenMenu ? "open" : ""}`}>
                        {isOpenMenu && <Navigation onClose={onVisible} />}</div>
                </>
            )}
        </header>
    );
}

export default Header;
