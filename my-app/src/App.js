import React ,{useState} from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import about from './about.js';
import welcome from './welcomep.js';

function drop ({title,items,multiselect=false}){

}
export default class App extends React.Component {
  constructor(){
    super();
    this.handleclick=this.handleclick.bind(this);
    this.state = {show:false,
      categories: [
        {
            id: 0,
            title: "Women's Fashions"
        },
        {
          id: 1,
          title: "Men's Fashions"
        },
        {
          id: 2,
          title: "Phones & Telecommunications"
        }
      ]
    }
  }
  handleclick(){
  alert("d");
  }
  render(){
  return (
    <div >
     <Router>
    <div>
   <nav style={{ display:"flex",alignItems:"center",justifyContent:"flex-end",height:"60px",backgroundColor:"rgb(0,0,0,0.8)"}}>
     <img src={require('./list.png')}width="40px" height="40px"alt="there is an error" style={{marginRight:"50px"}}onClick={this.handleclick}></img>
     <div style={{display:"flex",marginRight:"650px"}}>
   <p style={{color:"rgb(226,226,255)"}}><b>EASY</b></p>
    <img src={require('./cart.png')} width="40px" height="40px" alt="there is an error"></img>
    <p style={{color:"rgb(226,226,255)"}}><b>SHOP</b></p>
    </div>
   <Link to="/" style={{textDecoration:"none",color:"rgb(226,226,255)",marginRight:"10%"}}><b>Home</b></Link>
   <Link to="/about" style={{textDecoration:"none",color:"rgb(226,226,255)",marginRight:"15%"}}><b>About Us</b></Link>
   </nav>
   <Switch>
     <Route  path ="/about" component={about}/>
     <Route  path ="/" component={welcome}/>
   </Switch>
   </div>
</Router>
</div>
  );}
}

