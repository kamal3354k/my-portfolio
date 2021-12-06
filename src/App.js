import React from "react";
import { BrowserRouter , Switch , Route} from "react-router-dom";
import NavMenu from "./NavMenu";
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
function App() {
  return (
   <>
  <BrowserRouter>

   <NavMenu/>
   
   <Switch>
     <Route exact path="/">
       <Home/>
     </Route>
   </Switch>

   <Switch>
     <Route path="/about">
       <About/>
     </Route>
   </Switch>

   <Switch>
     <Route path="/projects">
       <Projects/>
     </Route>
   </Switch>

   <Switch>
     <Route path="/contact">
       <Contact/>
     </Route>
   </Switch>

   </BrowserRouter>
   </>
  );
}

export default App;
