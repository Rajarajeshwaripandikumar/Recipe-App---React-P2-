import { useEffect, useState } from "react";
import axios from "axios";

const Filters = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setCategories(res.data.categories));
  }, []);

  return (
    <select onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded-md mt-4">
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat.idCategory} value={cat.strCategory}>
          {cat.strCategory}
        </option>
      ))}
    </select>
  );
};
export default Filters;
