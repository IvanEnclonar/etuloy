import React from 'react'
import "../styles/Message.css";

export default function Messages({ model, key }) {
    return (
        <div key={key} className={model.sender == "user" ? "userMessage" : "botMessage"}>
            {model.message}
        </div>
    )
}
