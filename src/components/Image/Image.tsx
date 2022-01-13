import React from "react";
import s from './Image.module.css'

type ImagePropsType = {
    image?: string
    alt?: string
}
export const Image:React.FC<ImagePropsType> = ({image, alt}) => {
    return (
        <div className={s.imageBlock}>
            <img className={s.image} src={image} alt={alt}/>
        </div>
    )
}