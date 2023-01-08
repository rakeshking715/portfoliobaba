import React from 'react'
import '../Home.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext } from 'react'
import { multiStepContext } from './StepContext';

const Personal = () => {
    const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <>
            <div className="mt-4">

                <TextField sx={{ width: 300 }} className='mt-3 ms-5 display-inline'
                    placeholder="enter client full name"
                    id="standard-basic"
                    label="Name*"
                    variant="standard" 
                    value={userData['full name']}
                    onChange={(e)=>setUserData({...userData, 'fullName':e.currentTarget.value })}/>

                <TextField sx={{ width: 300 }} className='mt-3 ms-5 display-inline'
                    placeholder="client father's name"
                    id="standard-basic"
                    label="Father's Name*"
                    variant="standard"
                    value={userData['fathers name']}
                    onChange={(e)=>setUserData({...userData, 'fathersName':e.currentTarget.value })} />


                <TextField sx={{ width: 300 }} className='mt-3 ms-5 display-inline'
                    placeholder="client nominee name"
                    id="standard-basic"
                    label="Nominee Name*"
                    variant="standard"
                    value={userData['Nominee name']}
                    onChange={(e)=>setUserData({...userData, 'nomineeName':e.currentTarget.value })} />

                <TextField sx={{ width:     127 }} className='mt-3 ms-5 display-inline'
                    placeholder="dd/mm/yyyy"
                    type="number"
                    id="standard-basic"
                    label="Date of Birth*"
                    variant="standard"
                    value={userData['DOB']}
                    onChange={(e)=>setUserData({...userData, 'DOB':e.currentTarget.value })} />

                <FormControl className='mt-3 ms-5 display-inline' variant="standard" sx={{ width:     127 }}>
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

                <TextField sx={{ width: 300 }} className='mt-3 ms-5 display-inline'
                    placeholder="client mother's name"
                    id="standard-basic"
                    label="Mother's Name*"
                    variant="standard" 
                    value={userData['mothers name']}
                    onChange={(e)=>setUserData({...userData, 'mothersName':e.currentTarget.value })}/>

                <TextField sx={{ width:     127 }} className='mt-3 ms-5 display-inline'
                    placeholder="dd/mm/yyyy"
                    type="number"
                    id="standard-basic"
                    label="Nominee DOB*"
                    variant="standard" 
                    value={userData['birth']}
                    onChange={(e)=>setUserData({...userData, 'birth':e.currentTarget.value })}/>

                <FormControl className='mt-3 ms-5 display-inline' variant="standard" sx={{ width:     127 }}>
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

                <FormControl className='mt-3 ms-5 display-inline' variant="standard" sx={{ width:     127 
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

                <FormControl className='mt-3 ms-5 display-inline' variant="standard" sx={{ width:     127 
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
                        <MenuItem value={40}>Student</MenuItem>
                    </Select>
                </FormControl>

                <TextField sx={{ width: 300 }} className='mt-3 ms-5 display-inline'
                    placeholder="client parent's name"
                    id="standard-basic"
                    label="Parent's Name*" v
                    variant="standard" 
                    value={userData['parent name']}
                    onChange={(e)=>setUserData({...userData, 'parentsName':e.currentTarget.value })}/>

                <TextField sx={{ width: 300 }} className='mt-3 ms-5 display-inline'
                    placeholder="Nominee Adhar Number"
                    type="number"
                    id="standard-basic"
                    label="Adhar Number*" v
                    variant="standard" 
                    value={userData['adhar']}
                    onChange={(e)=>setUserData({...userData, 'adhar':e.currentTarget.value })}/>

                <TextField sx={{ width: 300 }} className='mt-3 ms-5 display-inline'
                    placeholder="Client Adhar Number"
                    type="number"
                    id="standard-basic"
                    label="Adhar Number*" v
                    variant="standard" 
                    value={userData['adhar number']}
                    onChange={(e)=>setUserData({...userData, 'adhar number':e.currentTarget.value })}/>

                <TextField sx={{ width:     127 }} className='mt-3 ms-5 display-inline'
                    placeholder="client Mob."
                    type="number"
                    id="standard-basic"
                    label="Mobile Number*" v
                    variant="standard" 
                    value={userData['Mobile number']}
                    onChange={(e)=>setUserData({...userData, 'mobileNumber':e.currentTarget.value })}/>

                <FormControl className='mt-3 ms-5 display-inline' variant="standard" sx={{ width:     127 
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

                <TextField sx={{ width: 300 }} className='mt-3 ms-5 display-inline'
                    placeholder="client E-mail"
                    type="email"
                    id="standard-basic"
                    label="E-mail" v
                    variant="standard" 
                    value={userData['Email']}
                    onChange={(e)=>setUserData({...userData, 'email':e.currentTarget.value })}/>

                <FormControl className='mt-3 ms-5 display-inline' variant="standard" sx={{ width: 300 }}>
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

                <TextField sx={{ width: 300 }} className='mt-3 ms-5 display-inline'
                    placeholder="Client PAN Number"
                    id="standard-basic"
                    label="PAN Number" v
                    variant="standard" 
                     value={userData['pan']}
                    onChange={(e)=>setUserData({...userData, 'pan':e.currentTarget.value })}/>

                <FormControl className='mt-3 ms-5 display-inline' variant="standard" sx={{ width: 300 }}>
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
                   
                         <Button className='mt-3 me-3 ' size='small' variant="contained" 
                    onClick={()=>setCurrentStep(2)}>
                        Next
                    </Button>
                </div>
            </div>


        </>
    )
}

export default Personal