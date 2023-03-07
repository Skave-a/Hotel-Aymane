import React from "react";
import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Rooms } from "./pages/Rooms";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar/Navbar";
import SingleRoom from "./pages/SingleRoom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
