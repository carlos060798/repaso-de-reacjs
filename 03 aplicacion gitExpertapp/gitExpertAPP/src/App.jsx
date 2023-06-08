
import { useState } from 'react'
import './App.css'
import AddCategory from './component/AddCategory'
import GitGrid from './component/GitGrid'
function GifExpertApp() {
 
  const [categories, setCategories] = useState(['One Punch'])
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    console.log(newCategory) 
    setCategories([newCategory,...categories])
  }

  
  
  return (
    <>
     <h1>GitExpert</h1>  
      <AddCategory   onNewCategory={value=>onAddCategory(value)}/>     
      {categories.map((category) => {
        return <GitGrid key={category} category={category} />
      })}
    
    
    </>
  )
}

export default GifExpertApp
