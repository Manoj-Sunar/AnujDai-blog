import { useState } from 'react'
import Buttons from '../MiniComponents/Buttons';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {

    const[searchInput,setSearch]=useState("");

  return (

    <div className='flex justify-between items-center py-5 md:px-20 px-4 bg-gray-100'>
        <div>
            <div>
                {/* logo */}
            </div>
            <div className=' border-2 border-gray-300 shadow-2xs rounded-full pr-2 px-2 flex justify-between items-center'>
               <SearchIcon sx={{padding:'2px',color:'gray'}}/>
               <input type="text" name='search' className='outline-none rounded-full py-2  px-1 text-xs text-gray-600' placeholder='search' value={searchInput} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
        </div>
        <div className='flex gap-x-2'>
            <Buttons type={'button'} text={'Sign In'} bgColor={'bg-gray-800'} borderRadius={'rounded-full'} textColor={'text-white'} p={'md:px-5  px-3  py-2'} fontSize={'md:text-sm text-xs'}/>
            <Buttons type={'button'} text={'Sign Up'} bgColor={'bg-gray-200'} borderRadius={'rounded-full'} textColor={'text-gray-600'} p={'md:px-5 px-3 py-2'} fontSize={'md:text-sm text-xs'} />

        </div>
    </div>
    
  )
}

export default Navbar