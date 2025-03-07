import React from 'react';
import './App.css';
import SideBar from "./components/navigation/Sidebar";
import Navbar from "./components/navigation/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cruises from "./pages/Cruises";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <SideBar />

          <div className="mt-10 p-4 sm:ml-64">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cruises" element={<Cruises />} />
              </Routes>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
