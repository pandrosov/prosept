import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/section/Header'
import Main from './components/section/Main'
import Selection from './components/section/Selection'
import ProductList from './components/section/ProductList'
import SliderView from './components/UI/SliderView';
import TabBar from './components/UI/TabBar/TabBar'
import TabBarItem from './components/UI/TabBar/TabBarItem'

const MainPage = () => (
    <>
        <>
            <TabBar>
                <TabBarItem label="Simple text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </TabBarItem>
                <TabBarItem label="Image">
                    <p>Lorem 2</p>
                </TabBarItem>
                <TabBarItem label="Just empty tab">
                    <h1>Hello</h1>
                </TabBarItem>
            </TabBar>
        </>

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
                    <Route path='/preview/:id' component={SliderView} />
                </Router>
            </div>
        </div>
    )
}

export default App