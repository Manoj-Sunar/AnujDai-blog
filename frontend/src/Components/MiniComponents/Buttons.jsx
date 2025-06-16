import React from 'react'

const Buttons = ({type,text,bgColor,p,m,borderRadius,textColor,fontWeight,fontSize}) => {
  return (
    <button type={type} className={` ${p} ${m} ${bgColor} ${borderRadius} ${textColor} ${fontWeight} cursor-pointer ${fontSize}`}>{text}</button>
  )
}

export default Buttons