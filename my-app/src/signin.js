import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './mydesign.css';
import Axios from 'axios';
import './App.css';
export default class Signin extends React.Component {
   constructor(){
        super();
        this.state={checked :false ,username:"",password:""};
    }
    handleclick=()=>{
      if((this.state.username!=="")&&(this.state.password!=="")){
  //      const json ={user:this.state.username,pass:this.state.password};
  Axios.get("http://localhost:3001/signin?"+"user="+this.state.username+"&pass="+this.state.password,{headers: {
    'Content-Type': 'application/json',
    "Clear-Site-Data": "*"
 }}).then(res => {
 if(res.data.message ==="success!"){
   if(res.data.type==="admin"){
    this.props.history.push('/admin');
   }
   else{
  //this.props.history.push('/account',{ name: 'some_value'});
  this.props.history.push('/account');
   }
 }
 else {
   alert(res.data.message);
 }
  });
}
else {
  alert("Please fill all the fields !");
}
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
          <div  id="d6" >
            <Button className="p-button-rounded p-button-raised p-button-help" label="LOGIN" onClick={this.handleclick} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}