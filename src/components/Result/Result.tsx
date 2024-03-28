import React from 'react';
import './result.scss';
import {SignComponent as Sign} from "@/components/Sign/SignComponent";
import {SignType} from "@/components/Sign/types";
import {compareResults} from "@/lib/compareResults";

interface IProps {
    userSign: SignType;
    compSign: SignType;
    onClick: () => void;
    size: number;
}

export const Result = ({userSign, compSign, onClick, size}: IProps) => {
    return (
        <div className='result__wrapper'>
            <div className='result'>
                <div className='result__title'>Вы выбрали</div>
                <Sign sign={userSign}/>
            </div>
            <div className='result__answer'>
                <p>{compareResults(userSign.id, compSign.id, size)}</p>
                <button
                    className='result__button'
                    onClick={() => onClick()}
                    type='button'>
                    Играть снова
                </button>
            </div>
            <div className='result'>
                <div className='result__title'>Компьютер выбрал</div>
                <Sign sign={compSign}/>
            </div>
        </div>
    );
};
