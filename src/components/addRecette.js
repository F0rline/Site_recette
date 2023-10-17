import React from 'react';
import RecipeForm from './formsAddRecette';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
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
      <div className='container'>
        <h2 className='fs-1 fw-bold p-top-30 text-center'>Ajouter une recette</h2>
        <RecipeForm />
      </div>
    </div>
  );
}

export default App;