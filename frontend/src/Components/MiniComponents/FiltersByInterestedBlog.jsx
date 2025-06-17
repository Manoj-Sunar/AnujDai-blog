import { useState } from "react"

const FiltersByInterestedBlog = () => {

    const [filter,setFilter]=useState({});

    const handleFilter=(item,index)=>{

        setFilter(prev=>({
            ...prev,
            [index]:!prev[index],
        }));
    }

  return (



    <div>
        <h1 className='font-bold text-gray-800 text-lg'>Filters by Interested Blog</h1>
        <div className='flex gap-2 flex-wrap  mt-2'>
           {
            ["Programming","Real State","Adventure","PUBG Gaming","Iphone 16"].map((item,index)=> <button className={`rounded-full ${filter[index]?'bg-gray-800 text-gray-200':'bg-gray-300 text-gray-700'} p-2 text-xs px-3 cursor-pointer`} key={index} onClick={()=>handleFilter(item,index)}>{item}</button>)
           }
        </div>
    </div>
  )
}

export default FiltersByInterestedBlog