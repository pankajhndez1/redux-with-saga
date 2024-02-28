import React from 'react'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const updatedData = useSelector((state) => state.
    cartReducer)
  return (
    <div><h1>CartIcon {updatedData && updatedData.length || 0}</h1> </div>
  )
}

export default CartIcon