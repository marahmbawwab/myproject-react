import React from 'react';
import './mydesign.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import {Button}  from 'primereact/button';
import Axios from 'axios' ;
export default class Add extends React.Component {
    constructor(){
        super();
        this.state={name:"",describe:"",quan:"",cat:"",dep:"",size:""}
        Axios.get("http://localhost:3001/getcat",{headers: {'Content-Type': 'application/json'
        ,"Clear-Site-Data": "*"}}).then(res => {
        }) ;
        
    }
    handle=()=>{
   console.log(this.state);
    }
render(){
        return(
            <div className="d" >
            <div >
            <div className="p-text-left dd"><b style={{fontSize:"35px",whiteSpace:"nowrap"}}>LET'S ADD PRODUCT</b></div>
            <br/>
            <div  className="item">
            <label htmlhtmlFor="name"><b style={{fontSize:"20px"}}>ProductName:</b></label>
              <InputText style={{marginLeft:"20%"}} id="name" onChange={(e)=>this.setState({name:e.target.value})} />
          </div>
          <br/>
          <div  className="item">
            <label htmlhtmlFor="quantity"><b style={{fontSize:"20px"}}>Quantity:</b></label>
              <InputText style={{marginLeft:"54%"}} id="quantity" onChange={(e)=>this.setState({quan:e.target.value})} />
          </div>
          <br/>
          <div  className="item" >
            <label htmlhtmlFor="cat"><b style={{fontSize:"20px"}}>Category:</b></label>
            <Dropdown style={{marginLeft:"40%",width:"300%"}} placeholder="Select a Category" onChange={(e)=>this.setState({cat:e.target.value})} />
          </div>
          <br/>
          <div  className="item" >
          <label htmlhtmlFor="dep"><b style={{fontSize:"20px"}}>Department:</b></label>
            <Dropdown placeholder="Select a Department"style={{marginLeft:"35%",width:"200%"}} onChange={(e)=>this.setState({dep:e.target.value})}/>
          </div>
          <br/>
          <div className="item">
          <label htmlhtmlFor="size"><b style={{fontSize:"20px"}}>Size:</b></label>
            <Dropdown placeholder="Select a Size" style={{marginLeft:"45%",width:"300%"}} onChange={(e)=>this.setState({size:e.target.value})} />
          </div>
          <br/>
          <div className="item">
          <label htmlhtmlFor="desc"><b style={{fontSize:"20px",marginLeft:"50%"}}>Description:</b></label>
          <div style={{display: "block"}} >
          <InputTextarea style={{marginLeft:"30%"}} rows={4} cols={50} onChange={(e)=>this.setState({describe:e.target.value})} />
          </div>
          </div>
          <br/>
          <div style={{marginLeft:"80%",marginTop:"2%"}}>
        <Button style={{width:"180px"}}className=" p-button-raised p-button-rounded" onClick={this.handle}><b style={{paddingRight:"35%",fontSize:"20px"}}>ADD</b></Button>
            </div>
            </div>
            </div>
         );

    }
}