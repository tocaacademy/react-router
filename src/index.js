import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import EpisodesRoute from './routes/episodes';
import CharactersRoute from './routes/characters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='characters' element={<CharactersRoute />}/>
          <Route path='episodes' element={<EpisodesRoute />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

