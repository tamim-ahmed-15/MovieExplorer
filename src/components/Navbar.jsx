
function Navbar({setPage}) {

    return (
       <nav className="navbar">
         <h2 className="logo" onClick={()=>setPage("home")}>MovieExplorer</h2>

         <div className="nav-links">
            <button onClick={()=>setPage("home")}>
                Home
            </button>

            <button onClick={()=>setPage("movies")}>
                Movies
            </button>
         </div>
       </nav>    
    )
}

export default Navbar;