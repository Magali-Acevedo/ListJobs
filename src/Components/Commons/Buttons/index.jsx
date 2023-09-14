import clsx from "clsx"

import style from "../Buttons/ButtonStyle.module.css"
import { useContext, useState } from "react";
import { FilterContext } from "../../../Context";

export const ButtonPrimary = ({
    contentBtn = "Contenido"
}) =>{
const context = useContext(FilterContext)


   
    return(
        <>
            <span className={style.buttonPrimary} onClick={context.handleFilter}>{contentBtn}</span>
        </>
    )
}

export const ButtonNew = ()=>{
    return (
        <>
        <span className={clsx(style.btnFilled, style.colorPrimary)}> NEW! </span>
        </>
    )
}