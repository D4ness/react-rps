import React from 'react';
import './bonusRPS.scss';
import {allSignsClassic, SignType} from "@/components/Sign/types";
import bg from '@/assets/images/bg-pentagon.svg';
import {SignClickable} from "@/components/Sign/SignClickable";

interface IProps {
    onClick: (arg0: SignType) => void;
}

export const BonusRPS = ({onClick}: IProps) => {
    return (
        <div>
            <div className='signs-bonus'
                 style={{backgroundImage: `url(${bg})`}}
            >
                <div className='signs-bonus__row'>
                    <SignClickable onClick={onClick} sign={allSignsClassic[1]}/>
                </div>
                <div className='signs-bonus__row signs-bonus__row_middle'>
                    <SignClickable onClick={onClick} sign={allSignsClassic[5]} />
                    <SignClickable onClick={onClick} sign={allSignsClassic[2]}/>
                </div>
                <div className='signs-bonus__row'>
                    <SignClickable onClick={onClick} sign={allSignsClassic[4]} />
                    <SignClickable onClick={onClick} sign={allSignsClassic[3]} />
                </div>
            </div>
        </div>
    );
};
