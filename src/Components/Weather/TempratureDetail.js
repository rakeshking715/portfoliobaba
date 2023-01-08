import React from 'react'
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import ShutterSpeedOutlinedIcon from '@mui/icons-material/ShutterSpeedOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { AppContext } from '../Context/AppContext';
import { useContext } from 'react';

const TempratureDetail = () => {
    const API = useContext(AppContext);
    return (
        <>

            <div className="d-flex flex-row justify-content-center ms-5 text-white fst-italic">
                <div className="flex justify-content-center text-sm">
                    <WbSunnyOutlinedIcon className='fs-5' />
                    <span className='fs-6'> Rise</span> <span className='ms-1 fs-6'>5:24 AM</span>
                </div>
                <p className='ms-2'>|</p>
                <div className="flex justify-content-center text-sm ms-2">
                    <Brightness3OutlinedIcon className='fs-5' />
                    <span className='fs-6'>Set</span> <span className='ms-1 fs-6'>7:24 AM</span>
                </div>
                <p className='ms-2'>|</p>
                <div className="flex justify-content-center text-sm ms-2">
                    <ArrowUpwardOutlinedIcon className='fs-5' />
                    <span className='fs-6'> High</span> <span className='ms-1 fs-6'>42&deg; C</span>
                </div>
                <p className='ms-2'>|</p>
                <div className="flex justify-content-center text-sm ms-2">
                    <ArrowDownwardOutlinedIcon className='fs-5' />
                    <span className='fs-6'> Low</span> <span className='ms-1 fs-6'>29&deg; C</span>
                </div>
            </div>


            <div className="d-flex flex-row justify-content-center text-white">
                <p className='fs-1 fw-bold'>{}</p>
                <div className="flex flex-col ms-3">
                    <div className="flex justify-content-center text-sm">
                        <DeviceThermostatOutlinedIcon className='fs-5' />
                        <span className='fs-6'> Real Felt</span> <span className='ms-1 fs-6 '>32&deg;</span>
                    </div>
                    <div className="flex justify-content-center text-sm" >
                        <PersonPinCircleOutlinedIcon className='fs-5' />
                        <span> Humidity</span> <span className='ms-1 fs-6'>65%</span>
                    </div><div className="flex justify-content-center text-sm" >
                        <ShutterSpeedOutlinedIcon className='fs-5' />
                        <span> Wind Speed </span><span className='ms-1 fs-6'>11km/hr</span>
                    </div>
                </div>
            </div>







        </>
    )
}

export default TempratureDetail