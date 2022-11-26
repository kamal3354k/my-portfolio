import React from "react";
import { BrowserRouter , Switch , Route, Routes} from "react-router-dom";
import NavMenu from "./NavMenu";
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
function App() {
  return (
   <>
  <BrowserRouter basename="my-portfolio">

   <NavMenu/>

   {/* <Switch>
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
   
   <Switch>
     <Route exact path="/">
       <Home/>
     </Route>
   </Switch>
*/}
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/about" element={<About/>}/>
<Route exact path="/projects" element={<Projects/>}/>
<Route exact path="/contact" element={<Contact/>}/>
<Route path="/*" element={<div className="not-found-div">404 Not found </div>}/>
</Routes>
   </BrowserRouter> 
   </>
  );
}

export default App;
