import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

function SearchInput() {
  const { query, setQuery, handleQueryChange } = useAppContext();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/Results/:${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className="input rounded-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 flex-grow mr-2"
        placeholder="Search..."
        required=""
        type="text"
        value={query}
        onChange={(e) => handleQueryChange(e)}
      />
    </form>
  );
}

export default SearchInput;
