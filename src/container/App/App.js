import { Route, Routes } from "react-router-dom"
import Main from "../Main/Main"
import "./App.scss"
import ServicePage from "../../pages/ServicePage/ServicePage"
import ProductsPage from "../../pages/ProductsPage/ProductsPage"
import ArticlesPage from "../../pages/ArticlesPage/ArticlesPage"
import ContactUsPage from "../../pages/ContactUsPage/ContactUsPage"
import LayoutComponent from "../../components/LayoutComponent/LayoutComponent"
import { useRef } from "react"
import SingleArticlePage from "../../pages/SingleArticlePage/SingleArticlePage"
import DocumentMeta from "react-document-meta"
import { Helmet } from "react-helmet"

function App() {
    const submitRef = useRef(null)
    const messageRef = useRef(null)

    const meta = {
        title: "Ftorex",
        description: "I am a description, and I can create multiple tags",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "react,meta,document,html,tags",
            },
        },
    }

    return (
        <div className="App">
            <DocumentMeta {...meta} />
            <Helmet>
                <title>Ftorex</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
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
