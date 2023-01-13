import "./search-box.styles.css";

const SearchBox = ({ className, placeholderText, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholderText}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
