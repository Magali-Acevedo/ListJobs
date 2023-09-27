import { Card } from "../Card"
import style from "../../AppStyle.module.css"
//data
import data from "../../Data/data.json"
import { useContext } from "react"
import { FilterContext } from "../../Context"

export const ListCard = ()=>{
    const context= useContext(FilterContext)
    const arr = context.dataListFilter.length>0 ? context.dataListFilter : data
    console.log("arr3",arr)
    return(
        <>
        <section className={style.listCard}>

        {
          arr.map((element) =>(
            <Card 
            key={element.id}
            isNew={element.new} 
            isFeatured={element.featured} 
    
            logo={element.logo}
            company={element.company}
            languages={element.languages}
    
            position ={element.position}
    
            postedAt={element.postedAt}
            contract ={element.contract}
            location = {element.location}
    
            role ={element.role}
            level = {element.level}
            />   ))
        }
       
      </section>
      </>
    )
}