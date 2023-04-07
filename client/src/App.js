
import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Register from "./components/Register/Register";


function App() {
    return(
      <BrowserRouter>

        <Register />
          
          <Routes>

          </Routes>

      </BrowserRouter>
    )

}

export default App;
