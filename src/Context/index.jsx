import { createContext, useEffect, useState } from "react";

import data from "../Data/data.json";
import types from "../Data/types.json";

export const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const [filter, setFilter ] = useState([]);

    const [dataListFilter,setDataListFilter] = useState([]);
    //Filtrado
    //console.log("types",types)
    useEffect(()=>{
      const dataFilter = () => {
        let filteredData = [...data]; // Copia inicial de todos los datos
      
        if (filter.some(filterItem => types.level.includes(filterItem))) {
           filteredData = filteredData.filter(elem => filter.includes(elem.level));
        }
      
        if (filter.some(filterItem => types.role.includes(filterItem))) {
          filteredData = filteredData.filter(elem => filter.includes(elem.role));
        }
        if (filter.every(filterItem => types.languages.includes(filterItem))) {
            filteredData = filteredData.filter(elem =>
              filter.every(lang => elem.languages.includes(lang))
            );
          }

        setDataListFilter(filteredData);
      
      }
      dataFilter()
    },[filter])
   
        
    //Guarda el filtro seleccionado
    const handleFilter= (e)=>{
        console.log("e",e.target.innerText)
        let selectFilter = e.target.innerText;
        if (!filter.includes(selectFilter)){
            setFilter([...filter , selectFilter])
           
        }
        
      }
    //Limpiar Todo los Filtros seleccionados
    const clearFilter =()=>{
        setFilter([])
        setDataListFilter([])
    }
     

//Limpiar el filtro seleccionado

const clearSelectFilter = (index) => {
  const updatedFilter = [...filter]; // Copia del filtro actual
  updatedFilter.splice(index, 1); // Elimina el elemento del filtro
  setFilter(updatedFilter); // Actualiza el filtro
  
  // Luego, vuelve a filtrar los datos con el nuevo filtro
  let filteredData = [...data]; // Copia inicial de todos los datos

  if (updatedFilter.some(filterItem => types.level.includes(filterItem))) {
      filteredData = filteredData.filter(elem => updatedFilter.includes(elem.level));
  }

  if (updatedFilter.some(filterItem => types.role.includes(filterItem))) {
      filteredData = filteredData.filter(elem => updatedFilter.includes(elem.role));
  }

  if (updatedFilter.every(filterItem => types.languages.includes(filterItem))) {
      filteredData = filteredData.filter(elem =>
          updatedFilter.every(lang => elem.languages.includes(lang))
      );
  }

  setDataListFilter(filteredData);
  console.log("res", filteredData);
}

    return (
<FilterContext.Provider         
        value={
            {
                filter,
                setFilter,
                handleFilter,
                clearFilter,
                dataListFilter,
                setDataListFilter,
                clearSelectFilter
            }
        }>

        {children}
        </FilterContext.Provider>
    )
}