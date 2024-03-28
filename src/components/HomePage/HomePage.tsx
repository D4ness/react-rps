import React, {useState} from 'react';
import {allSignsClassic, SignType} from "@/components/Sign/types";
import {ClassicRPS} from "@/components/ClassicRPS/ClassicRPS";
import {Result} from "@/components/Result/Result";

export const HomePage = () => {
    const size = 3;
    const [userResult, setUserResult] = useState<SignType>(null);
    const [compResult, setCompResult] = useState<SignType>(null);
    const onClickHandler = (sign: SignType) => {
        setTimeout(() => {
            setUserResult(sign);
            const compValue = Math.floor(Math.random() * size) + 1;
            setCompResult(allSignsClassic[compValue]);
        }, 500);

    }

    const resetHandler = () => {
        setUserResult(null);
        setCompResult(null);
    }


    return (
        <section>
            Classic RPS
            {
                userResult === null ?
                    <ClassicRPS onClick={onClickHandler}/> :
                    <Result userSign={userResult} compSign={compResult} onClick={resetHandler} size={size}/>
            }
        </section>
    );
};

