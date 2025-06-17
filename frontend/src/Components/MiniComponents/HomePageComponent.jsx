import Avatar from "@mui/material/Avatar"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

const HomePageComponent = ({ data, id }) => {

    const [like, setLike] = useState({});

    const handleLikes = (id) => {
        setLike(prev => ({
            ...prev,
            [id]: !prev[id],
        }))
    }


    return (
        <div className="flex flex-col gap-y-5 py-4 border-b-1 border-gray-300 px-5">
            <div className="flex items-center  gap-x-2">
                <Avatar src="/profileImg.jpg" />
                <div className="flex items-center gap-x-2">
                    <span className="text-sm text-shadow-2xs  text-gray-500">John Doe</span>
                    <span className="text-sm  text-shadow-2xs text-gray-500">jun 16</span>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between items-start pb-3 md:pb-0 ">

                <div className="md:w-[50%] flex flex-col gap-y-5 mt-5 md:mt-0">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-xl text-gray-900">First-Time Buyer’s Guide: What to Know Before You Buy a Home</h1>
                        <p className="text-sm text-gray-700"> Learn the essential steps to buying your first home — from budgeting and loan approval to choosing the perfect property and making an offer</p>

                    </div>
                    <div className="flex gap-x-3 items-center">
                        <span className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-600  cursor-pointer">Buy Home</span>
                        {
                            like[id] ? <FavoriteIcon sx={{ fontSize: "1.3rem", cursor: 'pointer', color: 'gray' }} onClick={() => handleLikes(id)} /> : <FavoriteBorderIcon sx={{ fontSize: "1.3rem", cursor: 'pointer', color: 'gray' }} onClick={() => handleLikes(id)} />
                        }
                    </div>

                </div>
                <img src="https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.jpg?s=1024x1024&w=is&k=20&c=PW7IsevXSTtXeMcMvlvMwgUVRf31zarAJo2GkUkGJPw=" alt="" className="md:w-[150px]  md:h-[150px] object-contain" />

            </div>


        </div>
    )
}

export default HomePageComponent