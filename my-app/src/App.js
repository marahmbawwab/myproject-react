import React  from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import about from './about.js';
import welcome from './welcomep.js';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={open:false};
  this.handleclick=this.handleclick.bind(this);
  }
  handleclick(e){
    this.op.toggle(e);
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  }
 render(){
  return (
    <div >
     <Router>
    <div>
   <nav style={{ display:"flex",alignItems:"center",justifyContent:"flex-end",height:"60px",backgroundColor:"rgb(0,0,0,0.8)"}}>  
     <img  src={require('./list.png')}width="40px" height="40px"alt="there is an error" style={{marginRight:"50px"}} onClick={this.handleclick }></img>
     <OverlayPanel ref={el => (this.op = el)}>
     {this.state.open && (
              <ul style={{backgroundColor:"white"}}>
                <li>Men's Fashions</li>
                <li>Women's Fashions</li>
                <li>Home Items</li>
              </ul>
          )}
          </OverlayPanel>
     <div style={{display:"flex",marginRight:"650px"}}>
   <p style={{color:"rgb(226,226,255)"}}><b>EASY</b></p>
    <img  src={require('./cart.png')} width="40px" height="40px" alt="there is an error" ></img>
    <p style={{color:"rgb(226,226,255)"}}><b>SHOP</b></p>
    </div>
   <Link to="/" style={{textDecoration:"none",color:"rgb(226,226,255)",marginRight:"10%"}}><b>Home</b></Link>
   <Link to="/about" style={{textDecoration:"none",color:"rgb(226,226,255)",marginRight:"15%"}}><b>About Us</b></Link>
   </nav>
   <Switch>
     <Route  path ="/about" component={about}/>
     <Route  path ="/" component={welcome}></Route>
   </Switch>
   </div>
</Router>
</div>
  );}
}

