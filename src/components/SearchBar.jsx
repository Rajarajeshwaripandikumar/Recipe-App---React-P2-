import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchBar = ({ setSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setValue("");
    setSearch("");
  };

  return (
    <div className="relative w-full md:w-1/2 mx-auto">
      {/* Search Icon */}
      <MagnifyingGlassIcon className="absolute left-4 top-3 h-5 w-5 text-gray-400" />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search recipes..."
        className="w-full pl-12 pr-10 py-3 rounded-full 
                   bg-white/70 backdrop-blur-md
                   border border-gray-200 shadow-md
                   focus:ring-2 focus:ring-green-500 focus:border-green-500 
                   outline-none transition-all duration-300"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={clearSearch}
          className="absolute right-4 top-3 text-gray-400 hover:text-red-500 transition"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
