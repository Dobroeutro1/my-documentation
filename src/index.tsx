import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Navbar } from "./components/navbar/Navbar";
import { Sections } from "./components/sections/Sections";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Sections />
  </BrowserRouter>,
  document.getElementById('root')
);
