import { useContext } from 'react'
import { Header } from './Components/Header'
import { Card } from './Components/Card'
import style from "../src/AppStyle.module.css"
import "../src/GlobalStyle.css"

//data
import data from "../src/Data/data.json"

//
import { FilterContext, FilterProvider } from './Context'

function App() {
const context = useContext(FilterContext)
  console.log(data)
  return (
    <>
      <FilterProvider>
      <Header/>
      <section className={style.listCard}>

        {
          data.map((element) =>(
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
            />
          ))
        }
       
      </section>
      </FilterProvider>
    </>
  )
}

export default App
