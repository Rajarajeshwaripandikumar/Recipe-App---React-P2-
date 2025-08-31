import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const updateFavorites = () => {
      const favs = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavCount(favs.length);
    };

    updateFavorites(); // run on mount

    // listen for both localStorage + custom updates
    window.addEventListener("storage", updateFavorites);
    window.addEventListener("favoritesUpdated", updateFavorites);

    return () => {
      window.removeEventListener("storage", updateFavorites);
      window.removeEventListener("favoritesUpdated", updateFavorites);
    };
  }, []);

  return (
    <nav className="bg-[#f8f2eb] px-6 py-4 flex items-center justify-between shadow-sm">
      <Link to="/" className="text-xl font-bold text-gray-800">
        Recipe <span className="text-green-700">App</span>
      </Link>
      <div className="flex gap-6 text-gray-600 font-medium">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites ({favCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
