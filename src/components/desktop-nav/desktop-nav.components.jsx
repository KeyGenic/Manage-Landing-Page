import React from 'react';
import './desktop-nav.styles.scss';

export const DesktopNav = () => {
    return(
        <nav className = 'main-nav'>
            <ul>
                <li>Pricing</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
            </ul>
        </nav>
    )
}