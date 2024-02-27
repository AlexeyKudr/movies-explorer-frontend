import "../Profile/Profile.css";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <section className="profile">
            <h3 className="profile__header">Привет, Виталий!</h3>
            <form className="profile__fields">
                <div className="profile__block">
                    <p className="profile__title">Имя</p>
                    <input className="profile__input" placeholder="Виталий" type="text" />
                </div>
                <div className="profile__block">
                    <p className="profile__title-mail">E-mail</p>
                    <input className="profile__input-mail" placeholder="pochta@yandex.ru" type="email" />
                </div>
            </form>
            <div className="profile__submit">
                <button className="profile__button" type="submit">
                    Редактировать
                </button>
                <div className="profile__bottom">
                    <Link to="/" className="profile__link">
                        Выйти из аккаунта
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Profile;
