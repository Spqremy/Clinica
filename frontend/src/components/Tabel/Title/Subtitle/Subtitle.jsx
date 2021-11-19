import React from 'react'
import "./Subtitle.css"

const Subtitle = (props) => {
    return (
        <div>
            <h3 className={props.className}>{props.title}</h3>
        </div>
    )
}

export default Subtitle
