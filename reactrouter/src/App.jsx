import {BrowserRouter, Routes, Route} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import './App.css'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Concept } from "./pages/Concept";
import { Contact } from "./pages/Contact";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/concept"} element={<Concept/>}/>
          <Route path={"/contact"} element={<Contact/>}/>
          <Route path={"/*"} element={<div>Ooopsie page not found</div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
