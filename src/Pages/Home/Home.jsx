import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => { 
    const navigate = useNavigate();
    return (
        <>
            <p>Home Page</p>
            <button type="button"
                onClick={() => {
                    navigate('/tweets');
            }}
            >Tweets</button>
        
        
        </>
    )
        
}
