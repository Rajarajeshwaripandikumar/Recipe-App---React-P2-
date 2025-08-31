import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Wrapper with fixed ratio */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="absolute inset-0 w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {meal.strMeal}
        </h2>
        <p className="text-gray-500 text-sm">{meal.strCategory}</p>

        {/* Stylish Button */}
       <Link
  to={`/recipe/${meal.idMeal}`}
  className="mt-3 inline-block w-full text-center px-4 py-2 rounded-full 
             bg-green-700 text-white font-medium shadow-sm 
             hover:bg-green-800 transition-all duration-300"
>
  View Details
</Link>

      </div>
    </div>
  );
};

export default RecipeCard;
