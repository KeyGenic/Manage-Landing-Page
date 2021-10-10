import React from 'react';
import './app.scss';
import { Body } from './components/body/body.components';
import { Header } from './components/Header/header.components';

const Main = () => {
    return(
        <div className = "page">
            <Header />
            <Body />
        </div>
    )
}

export default Main