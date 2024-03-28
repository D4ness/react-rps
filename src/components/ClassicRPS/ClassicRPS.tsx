import React from 'react';
import './classicRPS.scss';
import {allSignsClassic, SignType} from "@/components/Sign/types";
import bg from '@/assets/images/bg-triangle.svg';
import {SignClickable} from "@/components/Sign/SignClickable";

interface IProps {
    onClick: (arg0: SignType) => void;
}

export const ClassicRPS = ({onClick}: IProps) => {
    return (
        <div>
            <div className='signs'
                 style={{backgroundImage: `url(${bg})`}}
            >
                <div className='signs__row'>
                    <SignClickable onClick={onClick} sign={allSignsClassic[1]}/>
                    <SignClickable onClick={onClick} sign={allSignsClassic[2]}/>
                </div>
                <div className='signs__row'>
                    <SignClickable onClick={onClick} sign={allSignsClassic[3]} />
                </div>
            </div>
        </div>
    );
};
