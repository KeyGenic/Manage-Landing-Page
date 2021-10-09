import React from "react";
import './hamburger.styles.scss';
import {ReactComponent as HamburgerToggle} from '../../Assets/icon-hamburger.svg';

export const Hamburger = ({props}) => {
    return(
<HamburgerToggle onClick = {props} className = 'hamburger' />
    )
}