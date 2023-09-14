import { createContext, useState } from "react";

import data from "../Data/data.json"

export const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const [filter, setFilter ] = useState([]);

    const [dataListFilter,setDataListFilter] = useState([]);
    //Filtrado

    const dataFilter = () =>{
        const res = data.filter(elem=> filter.includes(elem))
        console.log("...",res)
      }
    //Guarda el filtro seleccionado
    const handleFilter= (e)=>{
        console.log("e",e.target.innerText)
        let selectFilter = e.target.innerText;
        if (!filter.includes(selectFilter)){
            setFilter([...filter , selectFilter])
            dataFilter()
        }
    
      }
    //Limpiar Todo los Filtros seleccionados
    const clearFilter =()=>{
        setFilter([])
    }
     



    return (
<FilterContext.Provider         
        value={
            {
                filter,
                setFilter,
                handleFilter,
                clearFilter
            }
        }>

        {children}
        </FilterContext.Provider>
    )
}