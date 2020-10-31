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
export default class signup extends React.Component {
   handle=()=>{
    this.props.history.goBack();
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
              <InputText style={{marginLeft:"40%"}} id="full" />
          </div>
          <br/>
          <div  className="item">
            <label htmlhtmlFor="user"><b style={{fontSize:"20px"}}>UserName:</b></label>
              <InputText style={{marginLeft:"35%"}} id="user" />
          </div>
          <br/>
          <div  className="item" >
            <label htmlhtmlFor="pass"><b style={{fontSize:"20px"}}>Password:</b></label>
              <Password style={{marginLeft:"40%"}} id="pass" />
          </div>
          <br/>
          <div  className="item" >
            <label htmlhtmlFor="phone"><b style={{fontSize:"20px"}}>Phone:  </b>  </label>
              <InputNumber style={{marginLeft:"65%"}} id="phone" />
          </div>
          <br/>
          <div className="item">
            <label htmlhtmlFor="email"><b style={{fontSize:"20px"}}>Email:</b></label>
              <InputText style={{marginLeft:"70%"}}id="email" keyfilter="Email" />
          </div>
          <br/>
          <div  style={{ marginLeft:"33%"}}>
            <label htmlhtmlFor="gender"><b style={{fontSize:"20px"}}>Gender:</b></label>
            <div style={{ marginLeft:"60%"}}>
            <div className="p-col-12">
    <Checkbox inputId="cb1" value="Male"></Checkbox>
    <label htmlFor="cb1" className="p-checkbox-label"><b>Male</b></label>
</div>
<br/>
<div className="p-col-12">
    <Checkbox inputId="cb2" value="Female" ></Checkbox>
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