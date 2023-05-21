import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Starred from "./Pages/Starred";
import Show from "./Pages/Show";
import { ThemeProvider } from "styled-components";
function App() {
  const theme = {
    mainColors: {
      blue: "#2400ff",
      gray: "#c6c6c6",
      dark: "#353535",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/starred" element={<Starred />}></Route>
        <Route exact path="/show/:id" element={<Show />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
