import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';

const Navbar = () => {
    return (
        <>
            <div>
                <div className=''>
                    <b className=' fs-6 ms-2 text-white'>{moment().format('llll')}</b>
                    <div className=' ms-5 mt-1 text-end '>
                        <Link to='/' className='text-decoration-none text-warning ms-5 fw-bold fs-6'>Home</Link>
                        <Link to='/about' className='text-decoration-none ms-5 text-warning fw-bold fs-6'>About</Link>
                        <Link to='/work' className='text-decoration-none ms-5 text-warning fw-bold fs-6 '>Work Experience</Link>
                        <Link to='/contact' className='text-decoration-none ms-5 text-warning fw-bold fs-6  me-5'>Contact</Link>
                        <input type="search" placeholder='search' className='ms-5 me-2' />
                    </div>
                </div>



            </div>

        </>
    )
}

export default Navbar