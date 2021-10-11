import React from 'react';
import './app.scss';
import { Body } from './components/body/body.components';
import { GetStarted } from './components/cta-btn/cta-btn.components';
import { Footer } from './components/footer/footer.components';
import { Header } from './components/Header/header.components';
import { Testimonials } from './components/testimonials/testimonials.components';
const Main = () => {
    return(
        <div className = "page">
            <Header />
            <Body />
            <Testimonials />
            <div className = "simplify">
            <svg className = 'side-tablet' xmlns="http://www.w3.org/2000/svg" width="94" height="302"><rect className = "side-pill" width="310.431" height="708" x="-357" y="-17" fill="" fill-rule="evenodd" opacity=".071" rx="155.215" transform="scale(1 -1) rotate(-45 -951.398 26.5)"/></svg>
            <h1>Simplify how your team works today</h1>
            <div className = "btn">
            <GetStarted />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main