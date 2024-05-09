'use client';

import { useCallback } from "react";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";

interface CounterProps{
    title: string,
    subtitle: string,
    value: number,
    onChange: (value: number)=> void
}


const Counter:React.FC<CounterProps> = ({
    title,
    subtitle,
    value,
    onChange
}) => {

    const onAdd= useCallback(()=>{
        onChange(value+1)
    }, [onChange, value])

    const onReduce= useCallback(()=>{
        if (value==1) {
            return;
        } onChange(value-1)
    }, [onChange, value])
    return ( 
        <div 
        className="
            flex 
            flex-row 
            items-center 
            justify-between
        ">
            <div className="
                flex 
                flex-col
            ">
                <div className="
                    font-medium">
                    {title}
                </div>
                <div className="
                    font-light
                    text-gray-600
                ">
                    {subtitle}
                </div>
            </div>
            <div 
            className="
                flex
                flex-row
                items-center
                gap-4
            ">
                <div 
                onClick={onReduce}
                className="
                    w-10
                    h-10
                    border-[1px]
                    rounded-full
                    border-neutral-400
                    flex
                    items-center
                    justify-center
                    hover:opacity-80
                    text-neutral-600
                    cursor-pointer
                    transition
                ">
                    <BiMinus/>
                </div>
                <div className="
                    font-light
                    text-neutral-600
                    text-xl
                ">
                    {value}
                </div>
                <div 
                onClick={onAdd}
                className="
                    w-10
                    h-10
                    border-[1px]
                    rounded-full
                    border-neutral-400
                    flex
                    items-center
                    justify-center
                    hover:opacity-80
                    text-neutral-600
                    cursor-pointer
                    transition
                ">
                    <BiPlus/>
                </div>
            </div>
        </div>
    );
}

export default Counter;
