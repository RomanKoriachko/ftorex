import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { BrowserRouter } from "react-router-dom"
import App from "./container/App/App"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { Helmet } from "react-helmet"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <Helmet>
            <title>Ftorex</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <ScrollToTop />
                    <App />
                </React.StrictMode>
            </Provider>
        </BrowserRouter>
    </>
)
// document.getElementsByTagName("META")[2].content = ""

reportWebVitals()
