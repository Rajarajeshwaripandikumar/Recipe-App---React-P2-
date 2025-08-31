import { useEffect, useState } from "react";
import axios from "axios";

const IngredientFilter = ({ setIngredient }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((res) => setIngredients(res.data.meals.slice(0, 50))); // limit to 50 for performance
  }, []);

  return (
    <select
      onChange={(e) => setIngredient(e.target.value)}
      className="border p-2 rounded-md mt-4 ml-2"
    >
      <option value="">All Ingredients</option>
      {ingredients.map((ing, idx) => (
        <option key={idx} value={ing.strIngredient}>
          {ing.strIngredient}
        </option>
      ))}
    </select>
  );
};

export default IngredientFilter;
