import "./Search-box.styles.css";

const SearchBar = (props) => {
        const {onChangeHandler, Placeholder, Classname} = props;
        return (
            <input
              className={`search-box ${Classname}`}
              type="search"
              placeholder={Placeholder}
              onChange={onChangeHandler}
            />
        );
    }

export default SearchBar;