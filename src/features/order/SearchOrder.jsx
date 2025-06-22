import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  // Auto-focus the input when Enter is pressed anywhere
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter" && document.activeElement.tagName !== "INPUT") {
        inputRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order #"
        type="text"
        className="w-40 rounded-full border-2 border-stone-300 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 sm:w-48 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
