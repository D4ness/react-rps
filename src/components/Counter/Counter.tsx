import React from 'react';
import './counter.scss';

interface IProps {
    counterValue: number;
}
export const Counter = ({counterValue}: IProps) => {
    return (
        <div className='counter'>
            <div className='counter__title'>
                Счет
            </div>
            <div className='counter__value'>
                {counterValue}
            </div>
        </div>
    );
};

