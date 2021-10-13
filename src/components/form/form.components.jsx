import React from 'react';
import './form.styles.scss'

export const Form = () => {
    return(
        <form id = "form">
            <div className = "email-container">
            <input type="email"
            placeholder = "Updates in your Inbox..."
            />
            <button className = 'go-btn'>
                GO
            </button>
            </div>
        </form>
    )
}