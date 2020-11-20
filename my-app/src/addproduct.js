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
        this.state={name:null,describe:null,quan:null,dep:null,size:null,catarray:[],cat:null,deparray:[],sizes:[]};
    }
  componentDidMount(){
    Axios.get("http://localhost:3001/getcat",{headers: {'Content-Type': 'application/json'
        ,"Clear-Site-Data": "*"}}).then(res => {
         this.setState({catarray:res.data});
        }); 
  }
    handle=()=>{
  if(!(this.state.name===null)&&!(this.state.describe===null)&&!(this.state.quan===null)&&!(this.state.dep===null)&&!(this.state.size===null)&&!(this.state.cat===null)){
    Axios.get("http://localhost:3001/addprod?"+"name="+this.state.name+"&desc="+this.state.describe+"&quan="+this.state.quan+"&dep="+this.state.dep+"&size="+this.state.size,{headers: {
      'Content-Type': 'application/json',
      "Clear-Site-Data": "*"
   }}).then(res => {
    if(res.data.mes==="success"){
      this.props.history.push('/admin');
    }
   });
   }
  else {
        alert("please fill all the fields !") ;
      }
    }
    handlecat=(e)=>{
   this.state.cat=e.target.value ;
    if(!(this.state.cat==="Select a Category")&&!(this.state.cat===null)){
      Axios.get("http://localhost:3001/getdep?"+"name="+this.state.cat,{headers:{'Content-Type': 'application/json'
      ,"Clear-Site-Data": "*"}}).then(res => {
        this.setState({deparray:res.data});
      });   
    }
    }
    handledep=(e)=>{
      this.state.dep=e.target.value ;
      if(!(this.state.dep==="Select a Department")&&!(this.state.dep===null)){
        Axios.get("http://localhost:3001/getsize?"+"dep="+this.state.dep,{headers:{'Content-Type': 'application/json'
        ,"Clear-Site-Data": "*"}}).then(res => {
          this.setState({sizes:res.data});
        });   
      }
    }
    handlesize=(e)=>{
      this.state.size=e.target.value ;
    }
    render(){
  let optionTemplate = this.state.catarray.map(v => (
    <option value={v.name} key={v.id} >{v.name}</option>
  ));
  let depTemplate = this.state.deparray.map(v => (
    <option value={v.name} key={v.id} >{v.name}</option>
  ));
  let sizeTemplate = this.state.sizes.map(v => (
    <option value={v.sizetype} key={v.id} >{v.sizetype}</option>
  ));
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
           <select style={{marginLeft:"15%"}} value={this.state.value} onChange={this.handlecat}>
              <option selected>Select a Category</option>
          {optionTemplate}
        </select>
          </div>
          <br/>
          <div  className="item" >
          <label htmlhtmlFor="dep"><b style={{fontSize:"20px"}}>Department:</b></label>
          <select style={{marginLeft:"8%"}} value={this.state.value} onChange={this.handledep}>
              <option selected>Select a Department</option>
          {depTemplate}
        </select>
          </div>
          <br/>
          <div className="item">
          <label htmlhtmlFor="size"><b style={{fontSize:"20px"}}>Size:</b></label>
          <select style={{marginLeft:"25%"}} value={this.state.value} onChange={this.handlesize}>
              <option selected>Select a Size</option>
          {sizeTemplate}
        </select>
          </div>
          <br/>
          <div className="item">
          <label htmlhtmlFor="desc"><b style={{fontSize:"20px",marginLeft:"50%"}}>Description:</b></label>
          <div style={{display: "block"}} >
          <InputTextarea style={{marginLeft:"33%"}} rows={4} cols={50} onChange={(e)=>this.setState({describe:e.target.value})} />
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