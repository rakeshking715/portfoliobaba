import React, { useContext } from 'react'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { AppContext } from '../Context/AppContext';
import { useEffect } from 'react';

const Search = () => {

    const API = useContext(AppContext);

    return (
        <>
            <div className="d-flex text-white ">
                <Paper
                    component="form"
                    sx={{ display: 'flex', alignItems: 'center', width: 300, height: 35 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search City"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        value={API.city}
                        onChange={API.inputEvent}
                        required
                    />
                    <IconButton type="button" onClick={API.GetReport} sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            {/* <div>{API.weather}</div> */}
        </>
    )
}

export default Search