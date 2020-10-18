import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Checkbox} from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './mydesign.css';
import './App.css';

export default class Signin extends React.Component {
    constructor(){
        super();
        this.state={checked :false};
    }
   render() {
    return (
      <div className="Par">
        <div className="d2" >
        <img src={require('./images/user.png')} alt="no-display" width="80px" height="80px" className="d3"/>
          <div className="d4">
            <label htmlFor="username" style={{ width: "100px", height: "20px" }} ><b>UserName</b></label>
            <InputText id="username" name="usern"  />
          </div>

          <div className="d5">
            <label htmlFor="pass" style={{ width: "100px", height: "20px" }}><b>Password</b></label>
            <Password  name="pass"  />
          </div>
          <div >
            <Checkbox onChange={e => this.setState({checked: e.checked})} checked={this.state.checked}></Checkbox>
            <label htmlFor="pass" style={{padding:"20px"}}className="p-checkbox-label"><b>Remember Me</b></label>
          </div>
          <div  id="d6" >
            <Button className="p-button-rounded p-button-raised p-button-help" label="LOGIN" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}