import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Heading with count */}
      <h1 className="text-3xl font-bold mb-6">
        ❤️ My Favorites{" "}
        <span className="text-gray-500 text-xl">({favorites.length})</span>
      </h1>

      {/* Content */}
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites saved yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
