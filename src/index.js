import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './container/App/App'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ScrollToTop />
            <App />
        </React.StrictMode>
    </BrowserRouter>
)

reportWebVitals()
