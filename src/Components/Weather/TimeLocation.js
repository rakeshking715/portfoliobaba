import React, { useContext } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { AppContext } from '../Context/AppContext';




const TimeLocation = () => {
    const API = useContext(AppContext);
    const get = API.location;
    return (
        <>
            <div className=" d-flex justify-content-center text-white">
                {}
            </div>
            <p className=' d-flex fs-2 justify-content-center fw-bold text-white'><LocationOnOutlinedIcon className='fs-2 mt-2 fw-bold text-white' />{get.address}</p>
            <div className='text-white'>{API.report}</div>
        </>
    )
}

export default TimeLocation