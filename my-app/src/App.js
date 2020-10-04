import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import about from './about.js';
import home from './home.js';
function App() {
  return (
    <div className="cont">
    <Router>
 <div>
   <nav style={{backgroundColor:"lightblue",height:"50%"}}>
   <Link to="/" >Home</Link>
   <Link to="/about">About Us</Link>
   </nav>
   <Switch>
     <Route exact path ="/" component={home}/>
     <Route  path ="/about" component={about}/>
   </Switch>
 </div>
</Router>
    <p className="paragraph"><b>Welcome To EasyShop Website <br/>Thanks For Choosing Us </b></p>
    <div className="buttons">
    <Button className="p-button-raised p-button-rounded" >SignUp</Button>
    <Button className="p-button-raised p-button-help p-button-rounded" style={{marginTop: "10%"}}>SignIn</Button>
    </div>
    </div>
  );
}

export default App;
