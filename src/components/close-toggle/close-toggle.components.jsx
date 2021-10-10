import React from 'react';
import './close-toggle.styles.scss';
import {ReactComponent as Close} from '../../Assets/icon-close.svg'; 


export const CloseToggle = ({props}) => {
    return(
        <Close className = 'close' onClick = {props}/>
    )
} 