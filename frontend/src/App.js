import React, { useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/section/Header'
import Main from './components/section/Main'
import Selection from './components/section/Selection'
import ProductList from './components/section/ProductList'
import SliderView from './components/UI/Slider/SliderView';
import Modal from './components/Modal/Modal'

const MainPage = () => {
    const moveToRef = (node) => {
        console.log(node)
        node.current.scrollIntoView({ behavior: 'smooth' });
    }

    const productList = useRef()
    const main = useRef()
    
    return (<>
        <Header moveToRef={moveToRef} productList={productList} main={main} />
        <Main anchor={main} />
        <Selection />
        <ProductList anchor={productList} />
    </>)
}



const App = () => {
    return (
        <div className="landing">
            <div className="landing-container">
                <Modal />
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