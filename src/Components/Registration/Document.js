import React from 'react'
import { Link } from 'react-router-dom'
import '../Home.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { multiStepContext } from './StepContext';


const Personal = () => {
    const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);

    return (
        <>
            <div className=''>

                <TextField sx={{ width: 300 }} className='mt-4 ms-5 display-inline'
                    placeholder="enter client full name"
                    multiline
                    id="standard-basic"
                    label="Name*"
                    variant="standard" />

                <TextField sx={{ width: 300 }} className='mt-4 ms-5 display-inline'
                    placeholder="client father's name"
                    multiline
                    id="standard-basic"
                    label="Father's Name*"
                    variant="standard" />


                <TextField sx={{ width: 300 }} className='mt-4 ms-5 display-inline'
                    placeholder="client nominee name"
                    multiline
                    id="standard-basic"
                    label="Nominee Name*"
                    variant="standard" />

                <TextField sx={{ width:     127 }} className='mt-4 ms-5 display-inline'
                    placeholder="dd/mm/yyyy"
                    multiline
                    id="standard-basic"
                    label="Date of Birth*"
                    variant="standard" />

                <FormControl className='mt-4 ms-5 display-inline' variant="standard" sx={{ width:     127 
                 }}>
                    <InputLabel id="demo-simple-select-standard-label">Marital Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Account Types"
                    >
                        <MenuItem value="">
                            <em>Marital Status</em>
                        </MenuItem>
                        <MenuItem value={10}>Single</MenuItem>
                        <MenuItem value={20}>Married</MenuItem>
                    </Select>
                </FormControl>

                <TextField sx={{ width: 300 }} className='mt-4 ms-5 display-inline'
                    placeholder="client mother's name"
                    multiline
                    id="standard-basic"
                    label="Mother's Name*"
                    variant="standard" />

                <TextField sx={{ width:     127 }} className='mt-4 ms-5 display-inline'
                    placeholder="dd/mm/yyyy"
                    multiline
                    id="standard-basic"
                    label="Nominee DOB*"
                    variant="standard" />

                <FormControl className='mt-4 ms-5 display-inline' variant="standard" sx={{ width:     127 
                 }}>
                    <InputLabel id="demo-simple-select-standard-label">Relation*</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Account Types"
                    >
                        <MenuItem value="">
                            <em>Relation</em>
                        </MenuItem>
                        <MenuItem value={10}>Wife</MenuItem>
                        <MenuItem value={20}>Son</MenuItem>
                        <MenuItem value={30}>Husband</MenuItem>
                        <MenuItem value={40}>Father</MenuItem>
                        <MenuItem value={50}>Mother</MenuItem>
                        <MenuItem value={60}>Brother</MenuItem>
                        <MenuItem value={70}>Sister</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='mt-4 ms-5 display-inline' variant="standard" sx={{ width:     127 
                 }}>
                    <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Account Types"
                    >
                        <MenuItem value="">
                            <em>Gender</em>
                        </MenuItem>
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                        <MenuItem value={30}>Other</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='mt-4 ms-5 display-inline' variant="standard" sx={{ width:     127 
                 }}>
                    <InputLabel id="demo-simple-select-standard-label">Occupation</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Account Types"
                    >
                        <MenuItem value="">
                            <em>Occupation</em>
                        </MenuItem>
                        <MenuItem value={10}>Public Sector Employee</MenuItem>
                        <MenuItem value={20}>Pvt. SectorEmployee</MenuItem>
                        <MenuItem value={30}>Farmer</MenuItem>
                    </Select>
                </FormControl>

                <TextField sx={{ width: 300 }} className='mt-4 ms-5 display-inline'
                    placeholder="client parent's name"
                    multiline
                    id="standard-basic"
                    label="Parent's Name*" v
                    variant="standard" />

                <TextField sx={{ width: 300 }} className='mt-4 ms-5 display-inline'
                    placeholder="Nominee Adhar Number"
                    multiline
                    id="standard-basic"
                    label="Adhar Number*" v
                    variant="standard" />

                <TextField sx={{ width: 300 }} className='mt-4 ms-5 display-inline'
                    placeholder="Client Adhar Number"
                    multiline
                    id="standard-basic"
                    label="Adhar Number*" v
                    variant="standard" />

                <TextField sx={{ width:     127 }} className='mt-4 ms-5 display-inline'
                    placeholder="client Mob."
                    multiline
                    id="standard-basic"
                    label="Mobile Number*" v
                    variant="standard" />

                <FormControl className='mt-4 ms-5 display-inline' variant="standard" sx={{ width:     127 
                 }}>
                    <InputLabel id="demo-simple-select-standard-label">Citizenship*</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Account Types"
                    >
                        <MenuItem value="">
                            <em>Citizenship</em>
                        </MenuItem>
                        <MenuItem value={10}>Indian</MenuItem>
                        <MenuItem value={20}>Foreigner</MenuItem>
                    </Select>
                </FormControl>

                <TextField sx={{ width: 300 }} className='mt-4 ms-5 display-inline'
                    placeholder="client E-mail"
                    multiline
                    id="standard-basic"
                    label="E-mail" v
                    variant="standard" />

                <FormControl className='mt-4 ms-5 display-inline' variant="standard" sx={{ width: 300 }}>
                    <InputLabel id="demo-simple-select-standard-label">Yearly Income*</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Account Types"
                    >
                        <MenuItem value="">
                            <em>Income</em>
                        </MenuItem>
                        <MenuItem value={10}>Less than 1 Lakh PA</MenuItem>
                        <MenuItem value={20}>Less than 2 Lakh PA</MenuItem>
                        <MenuItem value={20}>Less than 2.5 Lakh PA</MenuItem>
                        <MenuItem value={20}>Less than 5 Lakh PA</MenuItem>
                        <MenuItem value={20}>Less than 10 Lakh PA</MenuItem>
                        <MenuItem value={20}>More than 2 Lakh PA</MenuItem>
                    </Select>
                </FormControl>

                <TextField sx={{ width: 300 }} className='mt-4 ms-5 display-inline'
                    placeholder="Client PAN Number"
                    multiline
                    id="standard-basic"
                    label="PAN Number" v
                    variant="standard" />

                <FormControl className='mt-4 ms-5 display-inline' variant="standard" sx={{ width: 300 }}>
                    <InputLabel id="demo-simple-select-standard-label">Relegion*</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Account Types"
                    >
                        <MenuItem value="">
                            <em>Relegion</em>
                        </MenuItem>
                        <MenuItem value={10}>Hindu</MenuItem>
                        <MenuItem value={20}>Muslim</MenuItem>
                        <MenuItem value={20}>Sikh</MenuItem>
                        <MenuItem value={20}>Christian</MenuItem>
                        <MenuItem value={20}>Other</MenuItem>
                    </Select>
                </FormControl>

                <div className='d-flex justify-content-end mt-3'>
                     
                    <Button className='mt-4' size='small' variant="contained"
                    onClick={()=>setCurrentStep(1)}>
                        Back
                    </Button>
                    <Button className='mt-4 ms-3' size='small' variant="contained"
                    onClick={()=>setCurrentStep(3)}>
                         Next
                    </Button>
                </div>
            </div>


        </>
    )
}

export default Personal