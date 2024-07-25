import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github () {

  const data = useLoaderData()
  /* const [data,setData] = useState([])
  useEffect(()=>{
    fetch(`https://api.github.com/users/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setData(data)})
  },[]) */

  return(
    <>
      <div className="bg-gray-950">
        <div className="bg-gray-950 p-4 lg:w-2/3 lg:mx-auto">
          <div className="bg-gray-700 p-4 w-full rounded-xl">
            <h1 className="text-white flex justify-center mx-auto text-3xl font-semibold">GITHUB STATS</h1>
          </div>
          <div className="flex gap-3 mt-4">
            <div className="w-1/3 border-2">
              <img src={data.avatar_url}/>
            </div>
            <div className="w-2/3 border-2 p-4 px-8">
              <p className="text-white ">Followers {data.followers}</p>
              <p className="text-white ">Following {data.following}</p>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </>
  )
}

export const githubLoader = async() => {
  const response = await fetch(`https://api.github.com/users/Helezonic`)
  return response.json()
}