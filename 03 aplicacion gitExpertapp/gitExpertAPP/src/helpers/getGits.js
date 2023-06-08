// funcion que consulta a la api de giphy

export async function getGits(category) {
    const url=`https://api.giphy.com/v1/gifs/search?api_key=z7ZuNe0lFi48cNvlOU1bldOAp2cMaLhQ&q=${category}&limit=10`	
    const resp=await fetch(url)
    const {data}=await resp.json() 
    const gits=data.map((img)=>({
     id:img.id,
     titule:img.title,
     url:img.images.downsized_medium.url
    })) 
    return gits
    } 
