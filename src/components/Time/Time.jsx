import React from 'react';
import './Time.css';

const Time = ({time}) => {
    let totalTime = 0;
    for(const spentTime of time){
        const intTime = parseInt(spentTime.readTime);
        totalTime = totalTime + intTime;
    }
    
    return (
        <div className='time-container'>
            <h3>Spent time on read: {totalTime} min</h3>
        </div>
    );
};

export default Time;