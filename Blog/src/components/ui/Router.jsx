import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import Blog from '../../screens/blog/articles/ArticlesPage'
import WalletConverter from '../../screens/walletConverter/WallerConverter'
import BuyList from '../../screens/buylist/BuyList'
import WeatherApp from '../../screens/weather/WeatherApp'
import Counter from '../../screens/counter/Counter'
import CalculatorApp from '../../screens/calculator/CalculatorApp'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Blog />} path='/blog/' />
                <Route element={<Blog />} path="/blog/:id" />
                <Route element={<CalculatorApp />} path='/calc/' />
                <Route element={<Counter />} path='/count/' />
                <Route element={<WeatherApp />} path='/weather/' />
                <Route element={<BuyList />} path='/note/' />
                <Route element={<WalletConverter />} path='/walletconver/' />
                <Route path='*' element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router