import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)

// return(
//  <div>
  //  <Routes>
    //  <Route path="/" element={<HOME/>} />
      //<Route path="/" element={<PALETAS/>} />
      //<Route path="/" element={<BOLSOS/>} />
      //<Route path="/" element={<ACCESORIOS/>} />
     


    //</Routes>


  //</div>
//)