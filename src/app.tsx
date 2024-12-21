import { Nav } from './components/nav'
import { LocationProvider, ErrorBoundary, Router } from 'preact-iso'
import './app.css'

import { Home } from './home';
import { About } from './about';
import { Error } from './error';
import { Products } from './products';
import { Footer } from './components/footer';
import { VeodraBabel } from './products/babel';
import { VeodraMirror } from './products/mirror';
import { VeodraOffice } from './products/office';
import { VeodraPCGuide } from './products/pcguide';

export function App() {
    return (
        <>
            <Nav />
            <LocationProvider>
                <ErrorBoundary>
                    <Router>
                        <Home path="/" />
                        <About path="/about" />
                        <Products path="/products"/>
                        <VeodraBabel path='/products/babel' />
                        <VeodraMirror path='/products/mirror' />
                        <VeodraOffice path='/products/office' />
                        <VeodraPCGuide path='/products/pcguide' />
                        <Error default />
                    </Router>
                </ErrorBoundary>
            </LocationProvider>
            <Footer />
        </>
    )
}