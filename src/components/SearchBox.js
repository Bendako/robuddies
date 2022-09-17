const SearchBox = ({searchField, searchChange }) => {
    return (
        <div className="pa2 tc">
            <input
                className="pa3 ba b--green bg-lightest-blue tc" 
                type="search" 
                placeholder="Search robots" 
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;