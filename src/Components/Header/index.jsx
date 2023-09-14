import { useContext } from "react"
import style from "../Header/headerStyle.module.css"
import { FilterContext } from "../../Context"
export const Header =()=>{
    const context = useContext(FilterContext)
    return(
    <>
    <div className={style.wrapperHeader}>
        <header className={style.header}>
            <div className={style.headerBg}></div>
        </header>
       {
       context.filter.length>0 &&
       <>
       <div className={style.headerFilter}>
            <ul className={style.listFilter}>
                {
                    context.filter.map((element,index)=>
 (                   <li className={style.btnFilter} key={index}>
                    <span className={style.btnFilterText}> {element} </span>
                    <span className={style.btnFilterClose}>X</span>
                    </li>)
                    )
                }


            </ul>
            <p className={style.headerFilterClear} onClick={context.clearFilter}>Clear</p>
        </div>
        </>}
    </div>
    </>
    )
}
