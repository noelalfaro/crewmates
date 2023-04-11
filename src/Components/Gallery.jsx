import React from 'react'
import { useState, useEffect } from 'react';
import { supabase } from '../Client'
import Card from './Card';

export default function Gallery() {

    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: true })

            setCrewmates(data);
        };
        fetchData();
    }, [])

    return (
        <div className='App'>
            {
                crewmates && crewmates.length > 0 ?
                    <div className='crewmate-gallery'>
                        {crewmates.map((crewmate) => (
                            <Card name={crewmate.name} speed={crewmate.speed} color={crewmate.color} key={crewmate.id} />
                        ))}
                    </div>
                    : <h1> no crewmates 😔</h1>
            }
        </div>
    )
}