import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../Client';
import BlueCrewmate from "../assets/blue-crewmate.png";
import RedCrewmate from "../assets/red-crewmate.png";
import WhiteCrewmate from "../assets/white-crewmate.png";
import OrangeCrewmate from "../assets/orange-crewmate.png"
import PinkCrewmate from "../assets/pink-crewmate.png"
import YellowCrewmate from "../assets/yellow-crewmate.png"
import PurpleCrewmate from "../assets/purple-crewmate.png"
import GreenCrewmate from "../assets/green-crewmate.png"



export default function Card(props) {
    let chosenImage;

    useEffect(() => {
        async function fetchCount() {
            const { data, error } = await supabase
                .from('Crewmates')
                .select('betCount')
                .eq('id', props.id)
                .single()
            if (error) {
                console.log(error)
            } else {
                setCount(data.betCount)
            }
        }
        fetchCount()
    }, [props.id])

    switch (props.color) {
        case "blue":
            chosenImage = BlueCrewmate;
            break;
        case "red":
            chosenImage = RedCrewmate;
            break;
        case "white":
            chosenImage = WhiteCrewmate;
            break;
        case "orange":
            chosenImage = OrangeCrewmate;
            break;
        case "pink":
            chosenImage = PinkCrewmate;
            break;
        case "purple":
            chosenImage = PurpleCrewmate;
            break;
        case "green":
            chosenImage = GreenCrewmate;
            break;
        case "yellow":
            chosenImage = YellowCrewmate;
            break;
        default:
            chosenImage = BlueCrewmate;
            break;
    }

    return (
        <Link to={'edit/' + props.id}>
            <div className='card-container'>
                <img src={chosenImage} style={{ width: 100 }} alt="Crewmate" />
                <h3>Name: {props.name}</h3>
                <h3>Speed: {props.speed}</h3>
                <h3>Color: {props.color}</h3>
            </div>
        </Link>
    )
}