import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        let url = search
          ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
          : category
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          : "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        const res = await axios.get(url);
        setRecipes(res.data.meals || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecipes();
  }, [search, category]);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Heading (ONLY Recipe Listings, no duplicate favorites) */}
      

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <SearchBar setSearch={setSearch} />
        <Filters setCategory={setCategory} />
      </div>

      {/* Recipes Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.length > 0 ? (
          recipes.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No recipes found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
