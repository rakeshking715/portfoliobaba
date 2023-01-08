import React from 'react'
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@mui/material'
import { multiStepContext } from './StepContext'
import { useContext } from 'react'

const Users = () => {
    const {finalData}=useContext(multiStepContext);
    return (
        <>
            <TableContainer className='' style={{ display: 'flex', justifyContent: 'center' }}>
                <Table border='1' style={{ width: '70%', justifyContent: 'center' }} size='small' arial-label='caption table'>
                    <TableHead>
                        <TableRow className='bg-blue text-primary'>
                            <TableCell>Name</TableCell>
                            <TableCell>Father's Name</TableCell>
                            <TableCell>Mother's Name</TableCell>
                            <TableCell>Nominee Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Pan Number</TableCell>
                            <TableCell>Mobile Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finalData.map((data)=>(
                            <TableRow key={data.email}>
                                <TableCell>{data.fullName}</TableCell>
                                <TableCell>{data.fathersName}</TableCell>
                                <TableCell>{data.mothersName}</TableCell>
                                <TableCell>{data.nomineeName}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.pan}</TableCell>
                                <TableCell>{data.mobileNumber}</TableCell>
                            </TableRow>
                           ) )}
                    </TableBody>
                </Table>

            </TableContainer>
        </>
    )
}

export default Users