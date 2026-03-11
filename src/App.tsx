import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import ThankYouPage from './pages/ThankYouPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
