import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import PaymentsIcon from '@mui/icons-material/Payments';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { AppContext } from './Context/AppContext';

const Sidebar = () => {
    const ContextData = useContext(AppContext);
    let datas = ContextData.isOpen;
    let dataas = ContextData.dashboard;

    return (
        <>
            <div>
                <div className='dashboard bg-secondary' style={{ width: datas ? '210px' : '41px' }}>
                    {datas ? <ClearIcon className='float-end mt-1' onClick={dataas} /> : <ArrowForwardIosIcon className='ViewHeadlineIconCSS' onClick={dataas} />}
                    <ul style={{ width: datas ? '210px' : '41px', transition: '0.7s' }}>
                        {datas ? <h3 className='fw-bolder'>Projects</h3> : null}<hr className='SidaBarHr' />
                        <Link className='sidebarA fw-normal fs-6' to='/'>
                            <HomeIcon /> <span style={{ display: datas ? null : 'none' }}> Home</span>
                            {datas ? <span className="badgeSpan label label-default rounded"> new</span> : null}
                        </Link>
                        <Link className='sidebarA fw-normal fs-6 ' to='/login'><LockOpenIcon /> <span style={{ display: datas ? null : 'none' }}>Login</span></Link>
                        <Link className='sidebarA fw-normal fs-6' to='/index'><AccountBoxIcon />
                            <span style={{ display: datas ? null : 'none' }}> New Account</span></Link>
                        <Link className='sidebarA fw-normal fs-6' to='/weather'><FormatListBulletedIcon />
                            <span style={{ display: datas ? null : 'none' }}> Weather</span></Link>
                        <Link className='sidebarA fw-normal fs-6' to='/'><AlarmOnIcon />
                            <span style={{ display: datas ? null : 'none' }}> Work shift</span></Link>
                        <Link className='sidebarA fw-normal fs-6' to='/'><PersonOutlineIcon />
                            <span style={{ display: datas ? null : 'none' }}> Attendence</span></Link>
                        <Link className='sidebarA fw-normal fs-6' to='/'><CheckBoxOutlineBlankIcon />
                            <span style={{ display: datas ? null : 'none' }}> Leaves</span></Link>
                        <Link className='sidebarA fw-normal fs-6' to='/'><PaymentsIcon />
                            <span style={{ display: datas ? null : 'none' }}> Salary</span></Link>
                        <Link className='sidebarA fw-normal fs-6' to='/'><GroupAddIcon />
                            <span style={{ display: datas ? null : 'none' }}> Recruiter</span></Link>
                        <Link className='sidebarA fw-normal fs-6' to='/'><SettingsApplicationsIcon />
                            <span style={{ display: datas ? null : 'none' }}> Master Setting</span></Link>
                        <Link className='sidebarA fw-normal fs-6' to='/'><SettingsAccessibilityIcon />
                            <span style={{ display: datas ? null : 'none' }}>Role & Permission</span></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Sidebar