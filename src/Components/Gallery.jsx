import React from 'react'
import { useState, useEffect } from 'react';
// import '../../App.css'
import { supabase } from '../Client'
import Card from './Card';

export default function Gallery() {

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
    return (
        <div className='App'>
            {
                crewmates && crewmates.length > 0 ?
                    crewmates.map((crewmate) =>
                        <div className='crewmate-gallery'>
                            <Card crewmate={crewmate.name}></Card>
                            {/* <h1>{crewmates.Name}</h1> */}
                        </div>
                    ) : <h1> no crewmates</h1>
            }
        </div>
    )
}
