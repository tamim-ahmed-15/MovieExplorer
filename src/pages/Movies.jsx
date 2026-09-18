import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard.jsx";
import MovieModal from "../components/MovieModal.jsx";

function Movies() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const getMovies = async () => {
        setIsLoading(true);
        setError("");
        try {
            const response = await fetch("https://api.tvmaze.com/shows");
            if(!response.ok) {
                throw new Error("Failed to load movies.");
            }
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const searchMovies = async () => {

        if(search.trim() === "") {
            getMovies();
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`);
            if(!response.ok) {
                throw new Error("Failed to search movies.");
            }
            const data = await response.json();
            const movieList = data.map(item => item.show);
            setMovies(movieList);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        if(value.trim() === "") {
            getMovies();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchMovies();
        }
    };

    const showDetails = (movie) => {
        setSelectedMovie(movie);
    };
    const closeDetails = () => {
        setSelectedMovie(null);
    };

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const response = await fetch("https://api.tvmaze.com/shows");
                if (!response.ok) {
                    throw new Error("Failed to load movies.");
                }
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        loadMovies();
    }, []);

    return (
        <div className="movies-page">
            <div className="movies-heading">
                <h1>Explore Movies</h1>
                <p>Search and discover movies and TV shows.</p>
            </div>

            <div className="search-box">
                <input type="text" placeholder="Search for movies or TV shows..." 
                value={search}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                />

                <button onClick={searchMovies}>Search</button>
            </div>
            <h2 className="results-title">
                {search.trim()? `Search Results for "${search}"` : "All Movies"}
            </h2>
            {isLoading && <p className="message-text">Loading movies...</p>}
            {error && <p className="error-text">{error}</p>}
            {!isLoading && !error && movies.length === 0 && <p className="message-text">No movies found.</p>}

            {!isLoading && !error && movies.length >0 &&
            (
            <div className="movies-container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        name={movie.name}
                        image={movie.image ? movie.image.medium : ""}
                        rating={movie.rating.average? movie.rating.average : "N/A"}
                        premiered={movie.premiered? movie.premiered : "N/A"}
                        movie={movie}
                        showDetails={showDetails}
                    />
                ))}
            </div>
            )
            }
            
            {selectedMovie && (
                <MovieModal 
                movie={selectedMovie} 
                closeDetails={closeDetails} />
            )}
            
        </div>
    );
}

export default Movies;