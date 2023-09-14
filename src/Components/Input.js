import React from 'react'

const Input = ({type,name,value,onChange,placeholder,className}) => {
  return (
    <div><input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className={className}/></div>
  )
}

export default Input