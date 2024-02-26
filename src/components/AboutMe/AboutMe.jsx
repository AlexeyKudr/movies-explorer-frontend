import "./AboutMe.css";
import photo from "../../images/avatar.jpg";

function AboutMe() {
    return (
        <section className="about-me" id="student">
            <h2 className="about-me__header">Студент</h2>
            <div className="about-me__content">
                <div className="about-me__info">
                    <h3 className="about-me__title">Виталий</h3>
                    <h1 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h1>
                    <p className="about-me__description">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
                        как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className="about-me__github" href="https://github.com/AlexeyKudr">
                        Github
                    </a>
                </div>
                <img src={photo} className="about-me__avatar" alt="Аватарка" />
            </div>
        </section>
    );
};

export default AboutMe;
