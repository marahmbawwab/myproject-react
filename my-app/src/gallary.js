import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './mydesign.css';

export default class gallary extends React.Component {
    handle=()=>{
        this.props.history.push({pathname:'/showcart',state:{id:this.props.location.state.id}});
    }
    render(){
        return(
         <div style={{display:"flex",flexDirection:"column"}}>
              <nav className="unav">
    <div style={{display:"flex",marginLeft:"3%"}}>
      <div style={{display:"flex",marginTop:"10px"}}>
   <p style={{color:"rgb(226,226,255)"}}><b>EASY</b></p>
    <img  src={require('./images/cart.png')}  width="40px" height="40px" alt="there is an error" ></img>
    <p style={{color:"rgb(226,226,255)"}}><b>SHOP</b></p>
    </div>
      <img  onClick={this.handle}style={{tooltip:"click to see your cart",marginLeft:"950px",marginTop:"10px"}}src={require('./images/navc.png')}height="40px" width="60px" alt="there is an error" ></img>
      </div>
      </nav>
         </div>);
    }
}