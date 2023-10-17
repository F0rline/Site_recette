import React, { useState, useEffect } from 'react';

const RecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeImage, setRecipeImage] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipes, setRecipes] = useState([]);

  // Fonction pour soumettre le formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // Récupérez les recettes existantes depuis localStorage
    const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    const newRecipe = {
      id: existingRecipes.length + 1, // Générez un nouvel ID
      name: recipeName,
      image: recipeImage,
      description: recipeDescription,
    };

    // Ajoutez la nouvelle recette à la liste
    const updatedRecipes = [...existingRecipes, newRecipe];

    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

    setRecipeName('');
    setRecipeImage('');
    setRecipeDescription('');
  };

  // Fonction pour charger les recettes depuis localStorage lors du chargement de la page
  useEffect(() => {
    const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(existingRecipes);
  }, []);

  return (
    // Formulaire pour ajouter une recette
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="recipeName" className="form-label fs-5">Nom de la recette</label>
          <input type="text" className="form-control" id="recipeName" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="recipeImage" className="form-label fs-5">Image</label>
          <input type="text" className="form-control" id="recipeImage" value={recipeImage} onChange={(e) => setRecipeImage(e.target.value)} required/>
          <div className="form-text">Mettez l'URL de votre image</div>
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Mettez les instructions de votre recette" id="recipeDescription" value={recipeDescription} onChange={(e) => setRecipeDescription(e.target.value)} required></textarea>
          <label htmlFor="recipeDescription">Description</label>
        </div>
        <div className='p-top-20'>
          <button type="submit" className="btn btn-dark">Ajouter votre recette</button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;