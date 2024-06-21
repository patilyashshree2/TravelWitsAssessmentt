import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// Generate the star icons for ratings
const generateStars = (rating) => {
  return Array.from({ length: 10 }, (_, i) =>
    i < Math.floor(rating) ? (
      <StarIcon key={i} style={{ color: "#000" }} />
    ) : (
      <StarBorderIcon key={i} style={{ color: "#000" }} />
    )
  );
};

function MovieList({ movies }) {
  return (
    <List className="MovieList">
      {movies.map((movie, index) => (
        <ListItem key={index} className="MuiListItem-root">
          <ListItemText
            primary={movie.title}
            secondary={
                <div>
                 <ul style={{ display: "flex", alignItems: "center", justifyContent:"space-between", listStyleType: "none", padding: "0px"}}>
                    <li>{generateStars(movie.rating)}</li>
                    <li>{`${movie.genre}`}</li>
                 </ul> 
                </div>

            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default MovieList;
