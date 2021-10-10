import React from 'react';
import './mobile-menu.styles.scss';

export const MobileMenu = ()  => {
    return(
        <div className = 'mobile-menu-container'>
            <ul className = "mobile-menu">
                <li>Pricing</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
            </ul>
        </div>
    )
}