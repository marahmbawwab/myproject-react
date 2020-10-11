import React from 'react';
import './App.css'; 
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

class  welcome  extends React.Component{
  render(){
  return (
    <div className="cont">
    <p className="paragraph"><b>Welcome To EasyShop Website <br/>Thanks For Choosing Us </b></p>
    <div className="buttons">
    <Button className="p-button-raised p-button-rounded"><b style={{paddingRight:"35%"}}>SignUp</b></Button>
    <Button className="p-button-raised p-button-help p-button-rounded" style={{marginTop: "10%"}}><b style={{paddingRight:"35%"}}>SignIn</b></Button>
    </div>
    </div>
  );
  }
}


export default welcome;
