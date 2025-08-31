#  Recipe App - React

A **dynamic recipe application** built with **React** and **TailwindCSS**.  
This app fetches data from the [TheMealDB API](https://www.themealdb.com/api.php) and allows users to **browse, search, filter, and view detailed recipes**. Users can optionally **save favorites** with persistence via `localStorage`.

---

## 🚀 Features

### 🔹 Recipe Listings
- Displays a clean grid of recipes from TheMealDB API.
- Each recipe card shows:
  - Name
  - Thumbnail image
  - Category

### 🔹 Search & Filter
- Search bar for finding recipes by name/keyword.
- Filter recipes by **category, meal type, or ingredients**.
- Search and filters work together for refined results.

### 🔹 Recipe Details
- Clicking a recipe shows:
  - Full instructions
  - Ingredients list
  - Category
  - YouTube video (if available)
- Easy navigation back to the main list.

### 🔹 Favorites (Optional)
- Users can **mark recipes as favorites** ❤️.
- Stored in **localStorage** for persistence across sessions.

---

## 🛠️ Tech Stack
- **React JS**
- **TailwindCSS** for styling
- **Axios / Fetch API** for data fetching
- **React Router** for navigation
- **Context API (optional)** for global state
- **LocalStorage** for favorites persistence
- **Public API:** [TheMealDB](https://www.themealdb.com/api.php)

---




---

## ⚙️ Installation & Setup
Clone the repository and install dependencies:

```bash
# Clone the repo
git clone https://github.com/Rajarajeshwaripandikumar/Recipe-App---React-P2-.git

# Navigate into the project
cd Recipe-App---React-P2-

# Install dependencies
npm install

# Start the dev server
npm run dev
