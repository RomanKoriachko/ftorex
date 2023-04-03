import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import './App.scss'
import ServicePage from '../../pages/ServicePage/ServicePage'
import ProductsPage from '../../pages/ProductsPage/ProductsPage'
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage'
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage'
import LayoutComponent from '../../components/LayoutComponent/LayoutComponent'
import { useRef } from 'react'

function App() {
    const submitRef = useRef(null)
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<LayoutComponent submitRef={submitRef} />}
                >
                    <Route index element={<Main submitRef={submitRef} />} />
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
