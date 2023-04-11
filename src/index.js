import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { BrowserRouter } from "react-router-dom"
import App from "./container/App/App"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { HelmetProvider } from "react-helmet-async"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <HelmetProvider>
                        <ScrollToTop />
                        <App />
                    </HelmetProvider>
                </React.StrictMode>
            </Provider>
        </BrowserRouter>
    </>
)

reportWebVitals()
