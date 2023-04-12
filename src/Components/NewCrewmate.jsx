import React, { useState, useEffect } from 'react';
import { supabase } from '../Client';

export default function NewCrewmate() {

    const [crewmates, setCrewmates] = useState({ name: "", speed: "", color: "" });
    const [selectedColor, setSelectedColor] = useState("");

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
            .insert({ name: crewmates.name, speed: crewmates.speed, color: selectedColor })
            .select();

        window.location = "/crewmate-gallery";
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        setCrewmates({ ...crewmates, [name]: value });
        setSelectedColor(event.target.value);
    }
    return (
        <div className='App'>
            <h1>Create a Crewmate</h1>
            <form onSubmit={createCrewmate} autocomplete="off" className='create-crewmate-form-container'>
                <label for="name"><h3>Name</h3> </label>
                <input type="text" id="name" name="name" value={crewmates.name} onChange={onChange} /><br />
                <br />

                <label for="speed"> <h3>Speed (MPH)</h3></label>
                <input type="number" id="speed" name="speed" value={crewmates.speed} onChange={onChange} /><br />
                <br />

                <div className='radio-form-group'>

                    <label htmlFor="color"><h3>Color</h3> </label>
                    <input type="radio" id="red" name="color" value="red" onChange={onChange} />
                    <label htmlFor="red">Red</label><br />

                    <input type="radio" id="blue" name="color" value="blue" onChange={onChange} />
                    <label htmlFor="blue">Blue</label><br />

                    <input type="radio" id="orange" name="color" value="orange" onChange={onChange} />
                    <label htmlFor="orange">Orange</label><br />

                    <input type="radio" id="pink" name="color" value="pink" onChange={onChange} />
                    <label htmlFor="pink">Pink</label><br />

                    <input type="radio" id="white" name="color" value="white" onChange={onChange} />
                    <label htmlFor="white">White</label><br />

                    <input type="radio" id="yellow" name="color" value="yellow" onChange={onChange} />
                    <label htmlFor="yellow">Yellow</label><br />

                    <input type="radio" id="purple" name="color" value="purple" onChange={onChange} />
                    <label htmlFor="purple">Purple</label><br />

                    <input type="radio" id="green" name="color" value="green" onChange={onChange} />
                    <label htmlFor="white">Green</label><br />
                </div>

                <input type="submit" value="Add Crewmate" />
            </form>
        </div>
    )
}