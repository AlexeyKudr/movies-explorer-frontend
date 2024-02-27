import logo from "../../images/logo__Header.svg";
import "../Login/Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <section className="login">
            <img src={logo} alt="логотип" className="login__logo" />
            <h3 className="login__header">Рады видеть!</h3>
            <form className="login__fields">
                <div className="login__block">
                    <p className="login__title">E-mail</p>
                    <input className="login__input" placeholder="pochta@yandex.ru" type="email" required />
                </div>
                <div className="login__block">
                    <p className="login__title">Пароль</p>
                    <input className="login__input" type="text" required />
                </div>
            </form>
            <div className="login__submit">
                <button className="login__button" type="submit">
                    Войти
                </button>
                <div className="login__bottom">
                    <span>Еще не зарегистрированы?</span>
                    <Link to="/signup" className="login__link">
                        Регистрация
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Login;
