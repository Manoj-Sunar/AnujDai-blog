import React from 'react'
import HomePageComponent from '../Components/MiniComponents/HomePageComponent'
import FiltersByInterestedBlog from '../Components/MiniComponents/FiltersByInterestedBlog'

const HomePage = () => {
    return (
        <div className='md:px-20 md:py-10 p-5 grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className=' md:col-span-2 border-r-1 border-gray-300 rounded-xs shadow-xs'>
                <div className='border-b-1 md:p-3  border-gray-300 px-4'>
                    {
                        [1,2,3].map((item,index)=><HomePageComponent key={index} id={index}/>)
                    }
                </div>
            </div>
             
             <div className='md:col-span-1'>
                <FiltersByInterestedBlog/>
             </div>
        </div>
    )
}

export default HomePage