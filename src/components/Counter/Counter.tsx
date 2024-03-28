import React from 'react';
import './counter.scss';

export const Counter = () => {
    return (
        <div className='counter'>
            <div className='counter__title'>
                Счет
            </div>
            <div className='counter__value'>
                0
            </div>
        </div>
    );
};

