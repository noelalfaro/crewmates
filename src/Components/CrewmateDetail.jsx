import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Client';

const CrewmateDetail = () => {
    const { id } = useParams();
    console.log(id);
    const [crewmate, setCrewmate] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('Crewmates').select('*').eq('id', id);
            if (error) {
                console.error(error);
            } else {
                setCrewmate(data[0]);
            }
        };
        fetchData();
    }, [id]);

    const updateCrewmate = async (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const speed = event.target.elements.speed.value;
        const color = event.target.elements.color.value;
        await supabase.from('Crewmates').update({ name, speed, color }).eq('id', id);
        window.location = '/crewmate-gallery';
    };


    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .delete()
            .eq('id', id);

        window.location = "/crewmate-gallery";

        alert('Crewmate Deleted')

    }

    const onChange = (event) => {
        const { name, value } = event.target;
        setCrewmate({ ...crewmate, [name]: value });
        setSelectedColor(event.target.value);
    }

    return (
        <div className='App'>
            <h1>Edit Crewmate</h1>
            {crewmate && (
                <form onSubmit={updateCrewmate} className='create-crewmate-form-container'>
                    <label htmlFor="name"><h3>Name</h3> </label>
                    <input type="text" id="name" name="name" defaultValue={crewmate.name} /><br /><br />

                    <label htmlFor="speed"> <h3>Speed (MPH)</h3></label>
                    <input type="number" id="speed" name="speed" defaultValue={crewmate.speed} /><br /><br />


                    <div className='radio-form-group'>
                        <label htmlFor="color"><h3>Color</h3> </label>
                        <input type="radio" id="red" name="color" value="red" onChange={onChange} checked={crewmate.color === "red"} />
                        <label htmlFor="red">Red</label><br />

                        <input type="radio" id="blue" name="color" value="blue" onChange={onChange} checked={crewmate.color === "blue"} />
                        <label htmlFor="blue">Blue</label><br />

                        <input type="radio" id="orange" name="color" value="orange" onChange={onChange} checked={crewmate.color === "orange"} />
                        <label htmlFor="orange">Orange</label><br />

                        <input type="radio" id="pink" name="color" value="pink" onChange={onChange} checked={crewmate.color === "pink"} />
                        <label htmlFor="pink">Pink</label><br />

                        <input type="radio" id="white" name="color" value="white" onChange={onChange} checked={crewmate.color === "white"} />
                        <label htmlFor="white">White</label><br />

                        <input type="radio" id="yellow" name="color" value="yellow" onChange={onChange} checked={crewmate.color === "yellow"} />
                        <label htmlFor="yellow">Yellow</label><br />

                        <input type="radio" id="purple" name="color" value="purple" onChange={onChange} checked={crewmate.color === "purple"} />
                        <label htmlFor="purple">Purple</label><br />

                        <input type="radio" id="green" name="color" value="green" onChange={onChange} checked={crewmate.color === "green"} />
                        <label htmlFor="green">Green</label><br />
                    </div>

                    <button className="deleteButton" onClick={deletePost}>Delete</button>
                    <input type="submit" value="Update Crewmate" />
                </form>
            )}
        </div>
    );
};

export default CrewmateDetail;