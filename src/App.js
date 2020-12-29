import React, { useState,useEffect } from "react";
import "./App.css";
import {
  Switch,
  Route,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
// import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { About } from "./Pages/Home/About";
import Admin from "./Admin";
import {Page404} from './Pages/404/Page404'
function App() {
  const [showAbout,setShowAbout] = useState(false)
  const [isAuth, setIsAuth] = useState(
  false
  );
  useEffect(() => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    setIsAuth(isAuth);
  }, []);
  return (
    <div>
      {isAuth === false ?
       <Router>
       <div>
          <Header/>
         <Switch>
         <Route path="/" exact={true}>
           <About />
         </Route>
         <Route path="">
           <Page404/>
         </Route>
         </Switch>

       </div>
     </Router>
      :
      <Router>
      <div>
         <Header/>
        <Switch>
        <Route path="/" exact={true}>
          <About />
        </Route>
        <Route path="/admin">
           <Admin/>
         </Route>
         <Route path="">
           <Page404/>
         </Route>
        </Switch>
      </div>
    </Router>
      }
    </div>
   
  );
}

export default App;
