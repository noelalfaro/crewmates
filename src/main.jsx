import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from './routes/detailView';
import Layout from './routes/Layout';
import AboutView from './routes/AboutView';
import GalleryView from './routes/GalleryView';
import NewView from './routes/NewView';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index={false} element={<Layout />}>
            <Route index={true} element={<App />} />
            <Route index={false} path="/edit/:id" element={<DetailView />} />
            <Route index={false} path="/crewmate-gallery" element={<GalleryView />} />
            <Route index={false} path="/new-crewmate" element={<NewView />} />
            <Route index={false} path='/about' element={<AboutView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
