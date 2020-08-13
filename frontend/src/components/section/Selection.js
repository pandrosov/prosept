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
                    <picture>
                        <source srcSet="/assets/images/selection/secure.webp" type="image/webp" />
                        <img src="/assets/images/selection/secure.png" alt="защитные составы" />
                    </picture>
                    <p>Защитные составы нового поколения</p>
                </li>
                <li className="selection-item">
                    <picture>
                        <source srcSet="/assets/images/selection/laba.webp" type="image/webp" />
                        <img src="/assets/images/selection/laba.png" alt="лабораторно-технический комплекс" />
                    </picture>
                    <p>Собственный лабораторно-технический комплекс</p>
                </li>
                <li className="selection-item">
                    <picture>
                        <source srcSet="/assets/images/selection/clean.webp" type="image/webp" />
                        <img src="/assets/images/selection/clean.png" alt="чистота окруужающей среды" />
                    </picture>
                    <p>Минимализация нагрузки на окружающую среду</p>
                </li>
                <li className="selection-item">
                    <picture>
                        <source srcSet="/assets/images/selection/eco.webp" type="image/webp" />
                        <img src="/assets/images/selection/eco.png" alt="Полное соответствие современным экостандартамс" />
                    </picture>
                    <p>Полное соответствие современным экостандартам</p>
                </li>
            </ul>
        </section>
    );
}

export default Selection;
