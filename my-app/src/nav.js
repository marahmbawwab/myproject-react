import React  from 'react';
import './App.css'; 
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Link } from 'react-router-dom';
 class Nav extends React.Component {
  constructor(){
    super();
    this.state={open:false,op:false};
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
    <div>
   <nav style={{display:"flex",alignItems:"center",justifyContent:"flex-end",height:"60px",backgroundColor:"rgb(0,0,0,0.8)"}}>  
     <img  src={require('./images/list.png')}width="40px" height="40px"alt="there is an error" style={{marginRight:"50px"}} onClick={this.handleclick }></img>
     <OverlayPanel ref={el => (this.op = el)}>
     {this.state.open && (
              <ul style={{backgroundColor:"white"}}>
                <li>Men's Fashions </li>
                <li>Women's Fashions</li>
              </ul>
          )}
          </OverlayPanel>
     <div style={{display:"flex",marginRight:"650px"}}>
   <p style={{color:"rgb(226,226,255)"}}><b>EASY</b></p>
    <img  src={require('./images/cart.png')} width="40px" height="40px" alt="there is an error" ></img>
    <p style={{color:"rgb(226,226,255)"}}><b>SHOP</b></p>
    </div>
   <Link to="/first"style={{textDecoration:"none",color:"rgb(226,226,255)",marginRight:"10%"}}><b>Home</b></Link>
   <Link to="/about" style={{textDecoration:"none",color:"rgb(226,226,255)",marginRight:"15%"}}><b>About Us</b></Link>
   </nav> 
   <img  src={require('./images/shop.jpg')} ></img>
   </div>);
}
 }
export default Nav;
