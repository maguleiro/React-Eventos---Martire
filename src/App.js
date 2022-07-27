import logo from './logo.svg';
import './App.css';
import Promises from "./components/Promises";
import TitleLanding from "./components/TitleLanding";
import NavBar from "./components/NavBar";
import CatalogoMaps from "./components/CatalogoMaps";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import UnmountExample from "./components/UnmountExample";
import Intercambiabilidad from "./components/Intercambiabilidad";

function App() {
  return (   
   <>
    {/*<UnmountExample  />
    <Intercambiabilidad countType="button" />*/}

   <BrowserRouter>
   <NavBar name={"menu"} />
   <Routes>
    <Route index path= "/" element={<>    
      <TitleLanding />  
      <CatalogoMaps />
      </>
    }/>
    <Route path= "/category/:id" element={<CatalogoMaps />}/>
    <Route path= "/detail" element={<ItemDetailContainer/>}/>


    <Route path="*"
    element={
      <div className="error"> 
      <p> ERROR 404 
      <a href="/"> <button> volver </button> </a>  
      </p>
      </div> 
    }
    />
    <Route path="/cart" element={<div>cart page</div>}/>        
   </Routes>
    </BrowserRouter>
   </>
  );
  
}

export default App;
