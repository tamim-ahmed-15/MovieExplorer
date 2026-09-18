
function MovieModal({movie, closeDetails}) {

    const rating = movie.rating && movie.rating.average ? movie.rating.average : "N/A";
    const releaseDate = movie.premiered ? movie.premiered : "N/A";
    const generes = movie.genres && movie.genres.length > 0 ? movie.genres.join(", ") : "N/A";
    const summary = movie.summary ? movie.summary.replace(/<[^>]*>/g, '') : "N/A";


    return (
        <div className="movie-background" onClick={closeDetails}>
            <div className="movie-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeDetails}>x</button>
                
                <h2>{movie.name}</h2>

                {movie.image? ( <img src={movie.image.original} alt={movie.name}
                className="modal-image" />) : (<div className="no-image">No Image Available</div>)}

                <div className="movie-details">
                    <p>
                        <strong>
                            Rating:
                        </strong>
                        {" "}{rating}
                    </p>
                    <p>
                        <strong>
                            Released:
                        </strong>
                        {" "}{releaseDate}
                    </p>
                    <p>
                        <strong>
                            Genres:
                        </strong>
                        {" "}{generes}
                    </p>
                    <p>
                        <strong>
                            Language:
                        </strong>
                        {" "} {movie.language ? movie.language : "N/A"}
                    </p>
                    <p>
                        <strong>
                            Runtime:
                        </strong>
                        {" "} {movie.runtime ? `${movie.runtime} minutes` : "N/A"}
                    </p>
                </div>

                <div className="movie-summary">
                    <h3>Summary:</h3>
                    <p>{summary}</p>
                </div>

                <button className="modal-close-bottom" onClick={closeDetails}>Close</button>
            </div>
        </div>
    );
}

export default MovieModal;