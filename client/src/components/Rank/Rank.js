import React from 'react';

const Rank = props => {
    return (
        <div className='center white f3'>
            <p>{props.name}, your rank is <span id='current-rank'>{props.rank}</span></p>
        </div>
    );
};

export default Rank;
