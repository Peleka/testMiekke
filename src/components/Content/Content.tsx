import React from "react";
import s from './Content.module.css'

type ContentPropsType = {
    title?: string
    text?: string
}

export const Content:React.FC<ContentPropsType> = ({title, text}) => {
    return (
        <div className={s.content}>
            <h1 className={s.title}>{title}</h1>
            <p className={s.text}>{text}</p>
        </div>
    )
}