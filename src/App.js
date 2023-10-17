import './App.css';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Recette from './components/Recette';
import AddRecette from './components/addRecette'
import AddNewRecette from './components/Recette-add-desc'



function App() {
  return (
    // Système de route avec React Router Dom
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={'/recette/:id'} element={<Recette/>}/>
        <Route path={'/recette/:id'} element={<Recette/>}/>
        <Route path={'/add-recette'} element={<AddRecette/>}/>
        <Route path={'/add-new-recette/:id'} element={<AddNewRecette/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
