import './search-box.css'

export const SearchBox = ({ placeholder, onSearchChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    </div>
  )
}