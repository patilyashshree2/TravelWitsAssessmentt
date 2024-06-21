import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const generateStars = (count) => {
    return Array.from({ length: 10 }, (_, i) => (
        i < count? <StarIcon key={i} style={{ color: '#000' }} /> : <StarBorderIcon key={i} style={{ color: '#000' }} />
    ));
};

function FilterBar({ onRatingChange, onGenreChange, genreFilter }) {
    return (
        <div className="FilterBar">
            <FormControl variant="outlined" className="MuiFormControl-root">
                <InputLabel>Rating</InputLabel>
                <Select
                    label="Rating"
                    onChange={onRatingChange}
                    renderValue={(selected) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {generateStars(selected)}
                        </div>
                    )}
                >
                    <MenuItem value=""><em>Any rating</em></MenuItem>
                    {Array.from({ length: 10 }, (_, i) => (
                        <MenuItem key={i} value={i + 1}>
                            <Checkbox checked={false} />
                            <ListItemIcon>
                                {generateStars(i + 1)}
                            </ListItemIcon>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className="MuiFormControl-root">
                <InputLabel>Genre</InputLabel>
                <Select
                    label="Genre"
                    multiple
                    value={genreFilter}
                    renderValue={(selected) => selected.join(', ')}
                    onChange={onGenreChange}
                >
                    <MenuItem value=""><em>Any genre</em></MenuItem>
                    <MenuItem value="Action">
                        <Checkbox checked={genreFilter.includes('Action')} />
                        <ListItemText primary="Action" />
                    </MenuItem>
                    <MenuItem value="Comedy">
                        <Checkbox checked={genreFilter.includes('Comedy')} />
                        <ListItemText primary="Comedy" />
                    </MenuItem>
                    <MenuItem value="Drama">
                        <Checkbox checked={genreFilter.includes('Drama')} />
                        <ListItemText primary="Drama" />
                    </MenuItem>
                    <MenuItem value="Thriller">
                        <Checkbox checked={genreFilter.includes('Thriller')} />
                        <ListItemText primary="Thriller" />
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default FilterBar;