import React from 'react';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Starred from './Pages/Starred';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/starred" element={<Starred />}></Route>
      <Route path="*" element={<NotFound />}>
        not found
      </Route>
    </Routes>
  );
}

export default App;
