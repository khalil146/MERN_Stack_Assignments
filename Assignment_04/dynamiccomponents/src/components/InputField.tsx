import React, { useState } from 'react'

export default function InputField(props:any) {

    const {onChange, value, className} = props;
  return (
    <input type="text" onChange={onChange} className={className} value={value}/>
  )
}
