import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import './App.scss'
import ServicePage from '../../pages/ServicePage/ServicePage'
import ProductsPage from '../../pages/ProductsPage/ProductsPage'
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage'
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage'
import LayoutComponent from '../../components/LayoutComponent/LayoutComponent'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<Main />} />
                    <Route path="service" element={<ServicePage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="articles" element={<ArticlesPage />} />
                    <Route path="contacts" element={<ContactUsPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
