import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Fetch recipe details
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        const meal = res.data.meals[0];
        setRecipe(meal);

        // Check localStorage for favorites
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.some((fav) => fav.idMeal === meal.idMeal));
      });
  }, [id]);

  // Toggle favorites
  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      favorites = favorites.filter((f) => f.idMeal !== recipe.idMeal);
    } else {
      favorites.push(recipe);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);

    // 🔔 Dispatch event so Navbar & Home update instantly
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  if (!recipe) return <p className="p-6 text-center">Loading recipe...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Recipe Image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-xl shadow-lg w-full max-w-md mx-auto h-72 object-cover"
      />

      {/* Title + Category */}
      <h1 className="text-3xl font-bold mt-4">{recipe.strMeal}</h1>
      <p className="text-gray-600 mb-4">Category: {recipe.strCategory}</p>

      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 text-white shadow-md hover:scale-105
          ${isFavorite ? "bg-red-500" : "bg-green-600 hover:bg-green-700"}`}
      >
        {isFavorite ? (
          <HeartSolid className="w-6 h-6 animate-pulse" />
        ) : (
          <HeartOutline className="w-6 h-6" />
        )}
        <span className="font-medium">
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </span>
      </button>

      {/* Ingredients */}
      <h2 className="text-xl font-semibold mt-6">🛒 Ingredients</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        {Array.from({ length: 20 }).map((_, i) => {
          const ing = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ing ? (
            <li key={i} className="text-gray-800">{`${ing} - ${measure}`}</li>
          ) : null;
        })}
      </ul>

      {/* Instructions */}
      <h2 className="text-xl font-semibold mt-6">📖 Instructions</h2>
      <p className="mt-2 leading-relaxed text-gray-700">
        {recipe.strInstructions}
      </p>

      {/* YouTube Link */}
      {recipe.strYoutube && (
        <a
          href={recipe.strYoutube}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full 
                     bg-gradient-to-r from-indigo-500 to-purple-600 
                     text-white font-medium shadow-md hover:scale-105 
                     transition-all duration-300"
        >
          ▶ Watch Video
        </a>
      )}
    </div>
  );
};

export default RecipeDetails;
