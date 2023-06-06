
import { useState } from 'react'
import './App.css'
import AddCategory from './component/AddCategory'
function GifExpertApp() {
 
  const [categories, setCategories] = useState(['One Punch',"goku"])
  
  const onAddCategory = (newCategory) => {
    console.log(newCategory) 
    setCategories([newCategory,...categories])
  }

  
  
  return (
    <>
     <h1>GitExpert</h1>  
      <AddCategory  
        onNewCategory={value=>onAddCategory(value)}
     
      />
      
     <ol>
      {categories.map((category) => {
        return <li key={category}>{category}</li>
      })}
     </ol>
    
    </>
  )
}

export default GifExpertApp
