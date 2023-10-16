import React from 'react';
// import { useNavigate } from 'react-router-dom';
import backphoto from '../../assets/img/backphoto.jpg'
export const HomePage = () => { 
    // const navigate = useNavigate();
    return (
        <img src={backphoto} alt={"backphoto"}
        width={"100%"}
        />
            
            /* <button type="button"
                onClick={() => {
                    navigate('/tweets');
            }}
            >Tweets</button> */
        
        
    )
        
}
