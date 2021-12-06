import React from 'react'
import Card from './Card'
import Data from './Data'
import './Cards.css'

function ncard(val,i){
    console.log(val);
    return(
       <Card img={val.image} h2={val.name} p={val.description} h5={val.category}/>
    )
}

function Cards() {
    return (
        <div className="main">

        <div className="more-card">
        {Data.map(ncard)}
        </div>
        </div>
    )
}

export default Cards
