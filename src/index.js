import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import EpisodesRoute from './routes/episodes';
import CharactersRoute from './routes/characters';
import ProfileRoute from './routes/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route
          index
          element={
            <main style={{ padding: "10rem", textAlign:"center" }}>
              <h1 style={{fontSize:"4rem"}}>RICKY AND MORTHI</h1>
              <p style={{fontSize:"2rem"}}>TOCA, Academy</p>
            </main>
          }
        />
          <Route path='characters' element={<CharactersRoute />}/>
          <Route path="characters/:characterID" element={<ProfileRoute />} />
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

