import React from 'react'
import { useState, useEffect } from 'react';
import { supabase } from '../Client';

export default function NewCrewmate() {

    const [crewmates, setCrewmates] = useState({ name: "", speed: "", color: "" });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: true })


            // set state of posts
            setCrewmates(data);
            console.log('crewmates: ', crewmates);
        };
        fetchData();
    }, [])

    const createCrewmate = async (event) => {
        event.preventDefault();
        await supabase
            .from('Crewmates')
            .insert({ name: crewmates.name, speed: crewmates.speed, color: crewmates.color })
            .select();

        window.location = "/";
    }

    const onChange = (event) => {
        setCrewmates((prevCrewmates) => {
            return { ...prevCrewmates, [event.target.name]: event.target.value }
        })
    }



    return (
        <div className='App'>
            <h1>Create a Crewmate</h1>
            <form onSubmit={createCrewmate} autocomplete="off">
                <label for="title">Name</label> <br />
                <input type="text" id="name" name="name" value={crewmates.name} onChange={onChange} /><br />
                <br />

                <label for="author">Speed</label><br />
                <input type="text" id="speed" name="speed" value={crewmates.speed} onChange={onChange} /><br />
                <br />

                <label for="description">Color</label><br />
                <input id="description" name='color' value={crewmates.color} onChange={onChange}>
                </input>
                <br />
                <input type="submit" value="Submit" />
            </form>


        </div>
    )
}
