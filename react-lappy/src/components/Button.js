import React from "react"

const Button = ({ text, onClick }) => {
    return (
        <>
            <button
                onClick={onClick}
                style={buttonStyle}
            >
                {text}
            </button>
        </>
    )
}

Button.defaultProps = {
    onClick: () => {
        console.log('click')
    }
}

const buttonStyle = {
    font: 'Arial',
}

export default Button
