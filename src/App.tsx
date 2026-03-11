import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="aula-gratis" element={<FormPage />} />
          <Route path="aula-liberada" element={<ThankYouPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
