import React from 'react'
import Table from './Table';

export default function Button(props:any) {
    const {OnClick, className} = props;
  return (
    <>
    <button onClick={OnClick} className={className}>Enter</button>
    </>
  )
}
