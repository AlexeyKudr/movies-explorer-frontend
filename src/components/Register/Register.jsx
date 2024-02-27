import logo from "../../images/logo__Header.svg";
import "../Register/Register.css";
import { Link } from "react-router-dom";

function Register() {
    return (
        <section className="register">
            <img src={logo} alt="логотип" className="register__logo" />
            <h3 className="register__header">Добро пожаловать!</h3>
            <form className="register__fields">
                <div className="register__block">
                    <p className="register__title">Имя</p>
                    <input className="register__input" placeholder="Виталий" type="text" required />
                </div>
                <div className="register__block">
                    <p className="register__title">E-mail</p>
                    <input className="register__input" placeholder="pochta@yandex.ru" type="email" required />
                </div>
                <div className="register__block">
                    <p className="register__title">Пароль</p>
                    <input className="register__input" placeholder="••••••••••••••" type="text" required />
                </div>
            </form>
            <span className="register__error">Что-то пошло не так...</span>
            <div className="register__submit">
                <button className="register__button" type="submit">
                    Зарегистрироваться
                </button>
                <div className="register__bottom">
                    <span>Уже зарегистрированы?</span>
                    <Link to="/signin" className="register__link">
                        Войти
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Register;

