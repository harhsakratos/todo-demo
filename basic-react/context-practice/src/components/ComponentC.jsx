import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../Context/MyContext'

const ComponentC = () => {
    const {name} = useContext(MyContext)
  return (
    <div>ComponentC state value is {name}</div>
  )
}

export default ComponentC