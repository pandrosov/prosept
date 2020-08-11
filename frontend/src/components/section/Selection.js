import React from 'react';

const Selection = () => {
    return (
        <section className="selection gray">
            <div className="selection-text">
                <h1 className="selection-text_title">Почему выбирают PROSEPT</h1>
                <h2 className="selection-text_subtitle">Prosept — российский производитель профессиональных моющих средств, антисептиков и бытовой химии для дома</h2>
            </div>
            <ul className="selection-items">
                <li className="selection-item">
                    <img src="/assets/images/selection/secure.png" alt="защитные составы" />
                    <p>Защитные составы нового поколения</p>
                </li>
                <li className="selection-item">
                    <img src="/assets/images/selection/laba.png" alt="лабораторно-технический комплекс" />
                    <p>Собственный лабораторно-технический комплекс</p>
                </li>
                <li className="selection-item">
                    <img src="/assets/images/selection/clean.png" alt="Минимализация нагрузки на окружающую среду" />
                    <p>Минимализация нагрузки на окружающую среду</p>
                </li>
                <li className="selection-item">
                    <img src="/assets/images/selection/eco.png" alt="Полное соответствие современным экостандартам" />
                    <p>Полное соответствие современным экостандартам</p>
                </li>
            </ul>
        </section>
    );
}

export default Selection;
