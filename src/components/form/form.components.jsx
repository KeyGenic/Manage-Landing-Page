import React from 'react';
import './form.styles.scss'

export const Form = () => {
    return(
        <form id = "form">
            <input type="text"
            placeholder = "Updates in your Inbox..."
            />
            <button className = 'go-btn'>
                GO
            </button>
        </form>
    )
}