import React, {Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import '@/assets/globals.scss';

const basename = process.env.NODE_ENV === 'production' ? '/react-rps' : '/';

const container: HTMLElement = document.getElementById("root")
createRoot(container).render(
    <React.StrictMode>
        <BrowserRouter basename={basename}>
            <Suspense fallback="Loading...">
                <App/>
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
)
