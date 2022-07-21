import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import EpisodesRoute from './routes/episodes';
import CharactersRoute from './routes/characters';
import CharacterProfile from './Views/Characters/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='characters' element={<CharactersRoute />}>
              <Route path=":characterID" element={<CharacterProfile />} />
          </Route>
          <Route path='episodes' element={<EpisodesRoute />}/>
          <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

