import React from 'react'
import { Price } from './Price'
import { Category } from './Category'

export const Sidebar = ({handleClickCategory}) => {
  return (
    <div className='flex flex-col gap-4'>
        <Price/>
        <Category handleClickCategory={handleClickCategory}/>
    </div>
  )
}
