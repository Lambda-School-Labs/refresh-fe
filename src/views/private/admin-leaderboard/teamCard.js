import React, { useState } from 'react';
import styled from 'styled-components';


const Card = styled.div`
    display: flex;
    background: white;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 100%;


    h1 {
        flex-basis: 0;

    }

    .name {
        min-width: 15vw;
        text-align: left;
    }
    .points{
        flex-grow: 2;
        width: 30vw;
        
    }
    .blank {
        width: 17.5vw;
    }
`

const TeamCard = props => {
    // console.log('TeamCard Props: ', props)

    if(props.team === undefined) {
        return <h1>Loading...</h1>
    }

    return (
        <Card>
            <h1 className='name'>{props.team.name}</h1>
            <h1 className='points'>{`${props.team.points === null ? props.team.points = 0 : props.team.points}`}</h1>
            <div className='blank'></div>
        </Card>
    )
}

export default TeamCard;