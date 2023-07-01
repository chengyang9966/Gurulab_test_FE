import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';
const HomePage = React.lazy(() => import('./pages/home/index'));
function App() {
  return (
    <Suspense
      fallback={
        <div className="h-screen m-auto">
          <LoadingSpinner />
        </div>
      }>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
