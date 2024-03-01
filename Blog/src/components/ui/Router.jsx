import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import Blog from '../../screens/blog/articles/ArticlesPage'
import BlogID from '../../screens/blog/article/ArticlePage'
import WalletConverter from '../../screens/walletConverter/App'
import BuyList from '../../screens/buylist/BuyList'
import WeatherApp from '../../screens/weather/WeatherApp'
import Counter from '../../screens/counter/Counter'
import CalculatorApp from '../../screens/calculator/CalculatorApp'
import { Provider } from 'react-redux'
import { traditionalStore, reduxToolkitStore } from '../../app/store'

// const Router = () => {
//     return (
//         <BrowserRouter>
//             <Provider store={traditionalStore}>
//                 <Routes>
//                     <Route element={<Blog />} path='/blog/' />
//                     <Route element={<Blog />} path="/blog/:id" />
//                 </Routes>
//             </Provider>
//             <Provider store={reduxToolkitStore}>
//                 <Routes>
//                     <Route element={<Home />} path='/'/>
//                     <Route element={<CalculatorApp />} path='/calc/' />
//                     <Route element={<Counter />} path='/count/' />
//                     <Route element={<WeatherApp />} path='/weather/' />
//                     <Route element={<BuyList />} path='/note/' />
//                     <Route element={<WalletConverter />} path='/walletconver/' />
//                     <Route path='*' element={<div>Not found</div>} />
//                 </Routes>
//             </Provider>
//         </BrowserRouter>
//     )
// }

// export default Router

import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetArticles from '../../Api';
import { connect } from 'react-redux';
import { apiArticles } from '../../app/index';
import NavBar from '../navBar/NavBar'


class App extends React.Component {
    componentDidMount() {
        GetArticles().then((articles) => {
            this.props.apiArticles(articles);
        })
    }

    render() {
        return (
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route element={<Blog />} path='/blog/' />
                    <Route element={<BlogID />} path="/blog/:id" />
                </Routes>
                <Provider store={reduxToolkitStore}>
                    <Routes>
                        <Route element={<Home />} path='/' />
                        <Route element={<CalculatorApp />} path='/calc/' />
                        <Route element={<Counter />} path='/count/' />
                        <Route element={<WeatherApp />} path='/weather/' />
                        <Route element={<BuyList />} path='/note/' />
                        <Route element={<WalletConverter />} path='/walletconver/' />
                        <Route path='*' element={<div>Not found</div>} />
                    </Routes>
                </Provider>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    apiArticles: (articles) => dispatch(apiArticles(articles)),
});

export default connect(null, mapDispatchToProps)(App);
