
import React from 'react'

const CheckBox = ({type,checked,onChange,className}) => {
  return (
    <div><input type={type} checked={checked} onChange={onChange} className={className}/></div>
  )
}

export default CheckBox