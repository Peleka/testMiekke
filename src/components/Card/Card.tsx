import React from "react";
import s from './Card.module.css'

export const Card = (props: any) => {
    return <div className={s.Card}>
        {props.children}
    </div>
}