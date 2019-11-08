import React from 'react';


export const Display = props =>{



    return (
        <div>
            <div>
                <h1>At Bat</h1>
                <div>
                <h3>Balls: {props.batInfo.balls}</h3>
               
                </div>
                <div>
                <h3>Strikes: {props.batInfo.strikes}</h3>
                
                </div>
                <div>
                <h3>Fouls: {props.batInfo.fouls}</h3>
                
                </div>
                <div>
                <h3>Hits: {props.batInfo.hits}</h3>
                
                </div>
                
            </div>

        </div>
    )
}