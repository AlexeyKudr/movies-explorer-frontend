import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="about-project" id="about">
            <h2 className="about-project__header">О проекте</h2>
            <div className="about-project__info">
                <div>
                    <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div>
                    <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__container">
                <div className="about-project__backend">
                    <p className="about-project__backend_title">1 неделя</p>
                </div>
                <p className="about-project__backend_subtitle">Back-end</p>
                <div className="about-project__frontend">
                    <p className="about-project__frontend_title">4 недели</p>
                </div>
                <p className="about-project__frontend_subtitle">Front-end</p>
            </div>
        </section>
    );
};

export default AboutProject;
