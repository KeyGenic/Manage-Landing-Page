import React from 'react';
import './app.scss';
import { Body } from './components/body/body.components';
import { Header } from './components/Header/header.components';
import { Testimonials } from './components/testimonials/testimonials.components';
const Main = () => {
    return(
        <div className = "page">
            <Header />
            <Body />
            <Testimonials />
        </div>
    )
}

export default Main