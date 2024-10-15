import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes?select=name")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  useEffect(() => {
    if (selectedRecipe) {
      fetch(`https://dummyjson.com/recipes/${selectedRecipe}`)
        .then((res) => res.json())
        .then((data) => {
          setRecipeData(data);
        });
    }
  }, [selectedRecipe]);

  return (
    <div>
      <select
        value={selectedRecipe}
        onChange={(e) => {
          setSelectedRecipe(e.target.value);
        }}
      >
        <option value="" defaultValue>
          Recipes
        </option>
        {recipes.map((recipe) => (
          <option key={recipe.id} value={recipe.id}>
            {recipe.name}
          </option>
        ))}
      </select>

      {recipeData.length !== 0 ? (
        <div>
          <div>
            <h3>{recipeData.name}</h3>
            <p>
              Prep: {recipeData.prepTimeMinutes} mins Cook:{" "}
              {recipeData.cookTimeMinutes} mins {recipeData.difficulty}
            </p>
            <p>
              Serves: {recipeData.servings} Calories per serving:{" "}
              {recipeData.caloriesPerServing}
            </p>
            <img
              src={recipeData.image}
              style={{ height: 300, width: 300 }}
              alt="recipe"
            />
          </div>
          <div>
            <div>
              <h3>Ingredients</h3>
              {recipeData.ingredients.map((ingredient) => (
                <p>{ingredient}</p>
              ))}
            </div>
            <div>
              <h3>Method</h3>
              {recipeData.instructions.map((instruction, index) => (
                <p>
                  {index + 1}. {instruction}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default App;
