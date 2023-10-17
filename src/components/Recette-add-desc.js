import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import navBar from './navBar';

function AddRecetteDesc() {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams(); // Obtenir l'ID de l'URL

  useEffect(() => {
    // Ce "UseEffect permet de récupérer les recettes depuis localStorage lors du chargement de la page
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  // On filtre les recettes en fonction de l'ID de l'URL
  const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!selectedRecipe) {
    return <div>Recette non trouvée</div>;
  }

  return (
    <div className="">
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
            <Link class="navbar-brand" to={"/"}>FooData</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link" to={"/add-recette"}>Ajouter une recette</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        <div className='container p-top'>        
            <div className="row gx-5">
                <div className="col">
                    <img src={selectedRecipe.image} className="img-fluid img-thumbnail" alt="..." />
                </div>
                <div className="col">
                    <p className="fw-bold fs-1">{selectedRecipe.name}</p>
                    <p className="fw-bold fs-3">Instructions</p>
                    <p className="fs-6">{selectedRecipe.description}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AddRecetteDesc;