
function MovieCard({ name, image, rating, premiered, movie, showDetails }) {
    return (
        <div className="movie-card">
           {image?(<img src={image} alt={name} 
           className="movie-image" />) : 
           (<div className="movie-card-no-image">
                No Image Available
            </div>)}

            <div className="movie-info">
                <h3>{name}</h3>
                <p>Rating: {rating}</p>
                <p>Released: {premiered}</p>

                <button onClick={() => showDetails(movie)}>See Details</button>
            </div>
        </div>
    );
}

export default MovieCard;