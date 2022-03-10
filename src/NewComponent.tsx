import React from "react";
import {FilterType} from "./App";

type MoneyType = {
    banknots: string
    nominal: number
    number: string
}

type NewComponentType = {
    money: Array<MoneyType>
    onClickFilterHandler: (nameButton: FilterType) => void
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots} </span>
                            <span>{objFromMoneyArr.nominal} </span>
                            <span>{objFromMoneyArr.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:"35px"}}>
                <button onClick={() => props.onClickFilterHandler("all")}>all</button>
                <button onClick={() => props.onClickFilterHandler("ruble")}>ruble</button>
                <button onClick={() => props.onClickFilterHandler("dollar")}>dollar</button>
            </div>
        </>
    )
}