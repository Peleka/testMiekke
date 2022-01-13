import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    buttonText?: string
    onClickButtonHandler?: () => void
    buttonText2?: string
    onClickButtonHandler2?: () => void
    iconLike?: string
    iconShare?: string
    icons?: Array<string>
}

export const Button: React.FC<ButtonPropsType> = ({
                                                      buttonText, onClickButtonHandler,
                                                      buttonText2, onClickButtonHandler2, icons, ...restProps

                                                  }) => {
    const buttonClassName = buttonText2 ? s.smallButton : s.buttonBlock
    const iconClassName = icons ? s.containerFlex : `style = {'display': 'none'}`

    return (
        <div className={buttonClassName}>
            <button className={s.button} onClick={onClickButtonHandler}>{buttonText}</button>
            {
                buttonText2 &&
                <button className={s.button} onClick={onClickButtonHandler2}>{buttonText2}</button>
            }

            <div className={iconClassName}>
            {
                icons &&
                    icons.map(icon => {
                        return (
                                <img className={s.icon} src={icon}/>
                        )
                    })
            }
            </div>
        </div>
    )
}