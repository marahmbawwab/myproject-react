import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Checkbox} from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './mydesign.css';
import Axios from 'axios';
import './App.css';
export default class Signin extends React.Component {
   constructor(){
        super();
        this.state={checked :false ,username:" ",password:" "};
    }
    handleclick=()=>{
      console.log("hiiii");
      //event.preventDefault();
    //Axios.post("http://localhost:3000/about",{user:this.state.username,pass:this.state.password});
  /*Axios.post('http://localhost:3000/about', {
      firstName: 'Finn',
      lastName: 'Williams'
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });*/
   /* Axios.get('/')
  .then(function (response) {
    console.log(response);
    console.log(response.status);
    //console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });*/
  Axios.get("/",{headers:{"Content-Type": "application/json"}}).then(res => {
    console.log(res.status);
    console.log(res.data.message);
    console.log(res.config);
  });
 
}
   render() {
    return (
      <div className="Par">
        <div className="d2" >
        <img src={require('./images/user.png')} alt="no-display" width="80px" height="80px" className="d3"/>
          <div className="d4">
            <label htmlFor="username" style={{ width: "100px", height: "20px" }} ><b>UserName</b></label>
            <InputText id="username" name="usern" onChange={(e) => this.setState({ username: e.target.value })} />
          </div>

          <div className="d5">
            <label htmlFor="pass" style={{ width: "100px", height: "20px" }}><b>Password</b></label>
            <Password  name="pass" onChange={(e) => this.setState({ password: e.target.value })} />
          </div>
          <div >
            <Checkbox onChange={e => this.setState({checked: e.checked})} checked={this.state.checked}></Checkbox>
            <label htmlFor="pass" style={{padding:"20px"}}className="p-checkbox-label"><b>Remember Me</b></label>
          </div>
          <div  id="d6" >
            <Button className="p-button-rounded p-button-raised p-button-help" label="LOGIN" onClick={this.handleclick} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}