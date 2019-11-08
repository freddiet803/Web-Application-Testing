import React from 'react';

 export const Dashboard = props =>{

    // handleStrikeClick = e =>{

    // }

    const handleHitClick = e =>{
       // e.preventDefault();
        props.hits();

    }

    return (
        <div>
            <button onClick={props.strikes}>Strike</button>
            <button onClick={props.balls}>Ball</button>
            <button onClick={props.fouls}>Foul</button>
            <button onClick={handleHitClick}>Hit</button>
            <button onClick={props.reset}>Reset</button>
            
        </div>
    )
}
