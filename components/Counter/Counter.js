import React from 'react'
import Statistics from './Statistics'
import Company from '../Company/Company'

export default function Counter() {
  return (
    <div className='mb-sm'>
        <div className='container'>
        <h6 className="pb-lg text-center lg:pb-md lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">TRUSTED BY THE BEST</h6>

        <Statistics/>

        <Company/>
        </div>
    </div>
  )
}
