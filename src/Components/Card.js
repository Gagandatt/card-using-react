import React from 'react'
import './Card.css'
function Card(props) {
    return (
        <div className="card">
            <img src={props.img}/>
            <div className="card-body">
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
                <h5>{props.h5}</h5>
            </div>
        </div>
    )
}

export default Card;

