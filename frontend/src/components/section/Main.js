import React from 'react';

const Main = () => {
    return (
        <main className="main">
            <h1 className="main-title">PROSEPT</h1>
            <div className="main-text">
                <p>Профессиональные средства с дезинфицирующими компонентами и содержанием спирта, необходимые для эффективной борьбы с распространением вирусов и бактерий</p>
                <button className="btn btn-primary">Заказать звонок</button>
            </div>
            <div className="main-images">
                <picture>
                    <source srcSet="/assets/images/main/preset-photo.webp" type="image/webp" />
                    <img src="/assets/images/main/preset-photo.png" alt="фото главной страницы" />
                </picture>
            </div>
        </main>
    );
}

export default Main;
