import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/section/Header'
import Main from './components/section/Main'
import Selection from './components/section/Selection'
import ProductList from './components/section/ProductList'
import SliderView from './components/UI/Slider/SliderView';

const MainPage = () => (
    <>
        <Header />
        <Main />
        <Selection />
        <ProductList />
    </>
)


const App = () => {
    return (
        <div className="landing">
            <div className="landing-container">
                <Router>
                    <React.StrictMode>
                        <Route exact path='/' component={MainPage} />
                    </React.StrictMode>
                    <Route path='/preview' component={SliderView} />
                </Router>
            </div>
        </div>
    )
}

export default App