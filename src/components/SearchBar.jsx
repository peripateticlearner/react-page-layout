function SearchBar() {
    return (
        <form className="search-bar" style={{ border: "3px solid green", padding: "5px", marginBottom: "5px" }}>
            <input type="text" placeholder="Search for employee" style={{ width: "90%" }} />
        </form>
    )
}

export default SearchBar;