import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AddRecette from './addRecette';

function App() {
  const [data, setData] = useState([]);
  console.log(data)
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

  useEffect(() => {
    // Effectuer la requête API lorsque le composant est monté
    axios.get(apiUrl)
      .then(response => {
        setData(response.data); // Stocker les données de la réponse dans votre state ou variable
        console.log(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la requête API : ", error);
      });
  }, []);
  

  return (
    <div className='container carrer'>
      { data.meals && data.meals.map(meal  => 
      <div className='card'>
        <img className='card-img-top' src={meal.strMealThumb}/>
        <div className='card-body'>
          <h5 className='card-title'>{meal.strMeal}</h5>
          <Link to={'/recette/' + meal.idMeal} className='btn btn-dark'>Détails →</Link>
        </div>
      </div>
      )}
    </div>
  );
}

function AddRecetteLocal(){

}

export default App;