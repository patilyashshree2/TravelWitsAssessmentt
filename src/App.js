import React, { useState } from 'react';
import './App.css'; 
import SearchBar from './components/searchBar';
import FilterBar from './components/FilterBar';
import MovieList from './components/MovieList';

function App() {
    const initialMovies = [
        { title: "The Matrix", rating: 7.5, genre: "Action" },
        { title: "Maps to the Stars", rating: 5, genre: "Drama" },
        { title: "Focus", rating: 6.9, genre: "Comedy" },
        { title: "The Lazarus Effect", rating: 6.4, genre: "Thriller" },
        { title: "Everly", rating: 4.5, genre: "Action" }
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [searchQuery, setSearchQuery] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [genreFilter, setGenreFilter] = useState([]);

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    const handleRatingChange = (event) => {
        setRatingFilter(event.target.value);
    };

    const handleGenreChange = (event) => {
        const value = event.target.value;
        setGenreFilter(value);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (ratingFilter ? movie.rating === parseFloat(ratingFilter) : true) &&
        (genreFilter.length === 0 || genreFilter.includes(movie.genre))
    );

    return (
        <div className="App">
            <div className="SearchAndFilters" style={{display: "flex", justifyContent: "space-between"}}>
                <SearchBar onSearchChange={handleSearchChange} />
                <FilterBar 
                    onRatingChange={handleRatingChange} 
                    onGenreChange={handleGenreChange} 
                    genreFilter={genreFilter} 
                />
            </div>
            <MovieList movies={filteredMovies} />
            {/* <MovieList movies={movies} /> */}
        </div>
    );
}

export default App;