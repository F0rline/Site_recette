import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AddRecettePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Récupérez les recettes depuis localStorage lors du chargement de la page
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  return (
    <div>
      <h2 className='fs-1 fw-bold p-top-30'>Liste des recettes</h2>
      <div className='container carrer'>
        {recipes.map((recipe, index) => (
        <div className='card' key={index}>
            <img className='card-img-top' src={recipe.image}/>
            <div className='card-body'>
                <h5 className='card-title'>{recipe.name}</h5>
                <Link to={'/add-new-recette/' + recipe.id} className='btn btn-dark'>Détails →</Link>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default AddRecettePage;
