import React from 'react';
import './mydesign.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import {Password} from 'primereact/password';
import { InputNumber } from 'primereact/inputnumber';
import {Checkbox} from 'primereact/checkbox';
import {Button}  from 'primereact/button';
import Axios from 'axios';
export default class signup extends React.Component {
  constructor(){
    super();
    this.state={name:"",usern:"",pass:"",email:"",gender:"",check1:false,check2:false}
    this.phone="";
  }
   handle=()=>{
     if(this.state.check1 && this.state.check2){
       alert("please check one of the check boxes for gender not both of them !");
     }
     else if ((this.state.check1&&!this.state.check2)||(this.state.check2&&!this.state.check1)) {
     if(this.state.check2){
      this.setState({gender:"female"});
     }
     else {
      this.setState({gender:"male"});
     }
     console.log(this.state.gender);
   if((this.state.name !=="")&&(this.state.usern !=="")&&(this.state.pass!=="")&&(this.state.email!=="")&&(this.phone!=="")){
    const json ={name:this.state.name,user:this.state.usern,pass:this.state.pass,phone:this.phone,email:this.state.email,gender:this.state.gender};
  Axios.post("http://localhost:3001/signup",json,{headers: {'Content-Type': 'application/json'}}).then(res => {
  if(res.data.message === 'success!'){
    this.props.history.goBack();
  }
  else {
    alert(res.data.message);
  }});
  }
  else {
    alert("please fill all the fields !");
  }
}
  }
    render(){
        return(
            <div className="d" >
             <div className="tt"><b>Welcome Back To Easy Shop </b>
            <br/><b style={{fontSize:"30px"}}>It's great to have you ! </b>
            </div>
            <div >
            <div className="p-text-left dd"><b style={{fontSize:"35px"}}>signup</b></div>
            <br/>
            <div  className="item">
            <label htmlhtmlFor="full"><b style={{fontSize:"20px"}}>FullName:</b></label>
              <InputText style={{marginLeft:"40%"}} onChange={(e) => this.setState({ name: e.target.value })} id="full" />
          </div>
          <br/>
          <div  className="item">
            <label htmlhtmlFor="user"><b style={{fontSize:"20px"}}>UserName:</b></label>
              <InputText onChange={(e) => this.setState({ usern: e.target.value })} style={{marginLeft:"35%"}} id="user" />
          </div>
          <br/>
          <div  className="item" >
            <label htmlhtmlFor="pass"><b style={{fontSize:"20px"}}>Password:</b></label>
              <Password onChange={(e) => this.setState({ pass: e.target.value })}style={{marginLeft:"40%"}} id="pass" />
          </div>
          <br/>
          <div  className="item" >
            <label htmlhtmlFor="phone"><b style={{fontSize:"20px"}}>Phone:  </b>  </label>
              <InputNumber onChange={(e) => this.phone =e.value}style={{marginLeft:"65%"}} id="phone" />
          </div>
          <br/>
          <div className="item">
            <label htmlhtmlFor="email"><b style={{fontSize:"20px"}}>Email:</b></label>
              <InputText onChange={(e) => this.setState({ email: e.target.value })}style={{marginLeft:"70%"}}id="email" keyfilter="Email" />
          </div>
          <br/>
          <div  style={{ marginLeft:"33%"}}>
            <label htmlhtmlFor="gender"><b style={{fontSize:"20px"}}>Gender:</b></label>
            <div style={{ marginLeft:"60%"}}>
            <div className="p-col-12">
    <Checkbox onChange={e => this.setState({check1: e.checked})} checked={this.state.check1} inputId="cb1" value="Male"></Checkbox>
    <label htmlFor="cb1" className="p-checkbox-label"><b>Male</b></label>
</div>
<br/>
<div className="p-col-12">
    <Checkbox onChange={e => this.setState({check2: e.checked})} checked={this.state.check2} inputId="cb2" value="Female"></Checkbox>
    <label htmlFor="cb2" className="p-checkbox-label"><b>Female</b></label>
</div>
</div>
          </div>
          <div style={{marginLeft:"80%",marginTop:"10%"}}>
        <Button style={{width:"180px"}}className="p-button-help p-button-raised p-button-rounded" onClick={this.handle}><b style={{paddingRight:"20%",fontSize:"20px"}}>Register </b></Button>
            </div>
            </div>
            </div>
         );

    }
}