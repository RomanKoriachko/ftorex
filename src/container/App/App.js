import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import './App.scss'
import ServicePage from '../../pages/ServicePage/ServicePage'
import ProductsPage from '../../pages/ProductsPage/ProductsPage'
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage'
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage'
import LayoutComponent from '../../components/LayoutComponent/LayoutComponent'
import { useRef } from 'react'
import SingleArticlePage from '../../pages/SingleArticlePage/SingleArticlePage'

function App() {
    const submitRef = useRef(null)
    const messageRef = useRef(null)
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <LayoutComponent
                            submitRef={submitRef}
                            messageRef={messageRef}
                        />
                    }
                >
                    <Route index element={<Main submitRef={submitRef} />} />
                    <Route
                        path="service"
                        element={<ServicePage messageRef={messageRef} />}
                    />
                    <Route path="products" element={<ProductsPage />} />
                    <Route
                        path="articles"
                        element={<ArticlesPage messageRef={messageRef} />}
                    />
                    <Route
                        path="contacts"
                        element={<ContactUsPage messageRef={messageRef} />}
                    />
                    <Route
                        path="articles/:articleId"
                        element={<SingleArticlePage />}
                    />
                </Route>
            </Routes>
        </div>
    )
}

export default App
