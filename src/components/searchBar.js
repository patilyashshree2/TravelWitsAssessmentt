
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function SearchBar({ onSearchChange }) {
    return (
        <Autocomplete
            freeSolo
            disableClearable
            options={[]} 
            onInputChange={(event, newInputValue) => onSearchChange(newInputValue)}
            renderInput={(params) => <TextField {...params} label="Enter movie name" variant="outlined" fullWidth />}
            className="MuiAutocomplete-root"
        />
    );
}

export default SearchBar;
