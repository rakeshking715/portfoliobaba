import React, { useContext } from 'react'
import './module.css'
import Search from './Search'
import TimeLocation from './TimeLocation'
import TempratureDetail from './TempratureDetail'
import ForeCast from './ForeCast'

const Weather = () => {

  return (
    <>
      <div className='mt-1 d-flex justify-content-center'>
        <div className='d-flex '>
          <Search />
        </div>
      </div>
      <TimeLocation />
      <TempratureDetail />
      <ForeCast title='Hourly Forecast' />
      <ForeCast className='mt-1' title='Daily Forecast' />
    </>
  )
}

export default Weather
