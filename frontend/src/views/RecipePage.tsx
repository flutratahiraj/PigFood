import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/RecipePage.css";
import axios from "axios";

interface Recipe {
  author: string;
  recipe: string;
}

export default function RecipePage() {
  const [inputValRecipe, setInputValRecipe] = useState("");
  const [inputValAuthor, setinputValAuthor] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  async function getRecipeData() {
    const { data } = await axios.get("http://localhost:8000/get-recipes");

    setRecipes(data);
  }

  useEffect(() => {
    getRecipeData();
  }, []);

  function addRecipe() {
    const newRecipe: Recipe = {
      author: inputValAuthor,
      recipe: inputValRecipe,
    };
    axios.post("http://localhost:8000/create-recipe", newRecipe);

    setRecipes([...recipes, newRecipe]);
  }

  return (
    <>
      <Navbar />
      <div className="main">
        <h1>Recipe ideas</h1>
        <div className="input-container">
          <label>Author:</label>
          <input
            type="text"
            value={inputValAuthor}
            onChange={(e) => setinputValAuthor(e.target.value)}
          />
          <label> Recipe idea:</label>
          <input
            type="text"
            value={inputValRecipe}
            onChange={(e) => setInputValRecipe(e.target.value)}
          />
          <button onClick={() => addRecipe()}>Add</button>
        </div>

        <div className="idea-container">
          {recipes &&
            recipes.map((recipe, index) => {
              return (
                <div className="recipe-item" key={index}>
                  <p className="author">Author: {recipe.author}</p>
                  <p className="recipe">Recipe idea: {recipe.recipe}</p>
                </div>
              );
            })}

          {recipes.length == 0 && <div>no recipes added yet</div>}
        </div>
      </div>
    </>
  );
}
