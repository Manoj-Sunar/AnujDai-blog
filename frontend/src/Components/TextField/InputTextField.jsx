

const InputTextField = ({label,type,name,state,setState,placeHolder}) => {

  const handleInputChange=(e)=>{

     const{name,value}=e.target;
     setState(prev=>({
      ...prev,
      [name]:value,
     }));
    
  }

  return (
    <div>
      <input type={type} name={name} value={state} onChange={handleInputChange} placeholder={placeHolder}/>
    </div>
  )
}

export default InputTextField