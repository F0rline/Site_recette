import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';

// Page d'affichage des détails de chaque recettes

function Recette() {
  const { id } = useParams(); // Récupérer l'ID depuis les paramètres d'URL avec la methode "useParams"
  const [recetteData, setRecetteData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    axios.get(apiUrl)
      .then(response => {
        if (response.data.meals && response.data.meals.length > 0) {
          setRecetteData(response.data.meals[0]);
        } else {
          // Gérer rien au cas où aucune recette n'est trouvée
          setRecetteData(null);
        }
      })
      .catch(error => {
        console.error("Erreur lors de la requête API : ", error);
      });
  }, [id]);

  return (
    <div>
      {/* Barre de navigation */}
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
        {/* Si recetteData retourne quelque chose alors on affiche la recette ou les recettes */}
      {recetteData ? (
      <div class="container p-top">
        <div className='row gx-5'>
          <div className='col'>
            <img src={recetteData.strMealThumb} className="img-fluid img-thumbnail" alt="..."/>
          </div>
          <div className='col'>
            <p class="fw-bold fs-1">{recetteData.strMeal}</p>
            <p class="fst-italic fs-4">{recetteData.strCategory} - {recetteData.strArea}</p>
            <p class="fw-bold fs-3">Instructions</p> 
            <p class="fs-6">{recetteData.strInstructions}</p>
          </div>
        </div>
    </div>
      ) : (
        // Sinon on affiche une message de chargement
        <div>Chargement en cours...</div>
      )}
    </div>
  );
}

export default Recette;
