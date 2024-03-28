import React from 'react';
import {SignComponent} from "@/components/Sign/SignComponent";
import {SignType} from "@/components/Sign/types";
import './sign.scss';

interface IProps {
    sign: SignType;
    onClick?: (arg0: SignType) => void;
}

export const SignClickable = ({sign, onClick}: IProps) => {

    return (
        <button className='sign__button' onClick={() => onClick(sign)}>
            <SignComponent sign={sign}/>
        </button>
    );
};

