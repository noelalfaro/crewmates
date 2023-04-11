import React from 'react'

export default function Card(props) {

    return (
        <div className='card-container'>
            <h3>Crewmate Name: {props.name}</h3>
            <h3>Crewmate Speed: {props.speed}</h3>
            <h3>Crewmate Color: {props.color}</h3>
        </div>
    )
}