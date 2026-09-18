
function Home({setPage}){

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Discover Movies</h1>

                    <p>
                        Explore a vast collection of movies, from timeless classics to the latest releases. Dive into the world of cinema and find your next favorite film.
                    </p>

                    <button onClick={()=>setPage("movies")}>
                        Explore Movies
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Home;