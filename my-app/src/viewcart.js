
import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './mydesign.css';
import Axios from 'axios';
export default class gallary extends React.Component {
    constructor(){
        super();
        this.state={cart:[]};
    }
    componentDidMount(){
 Axios.get("http://localhost:3001/getcart?"+"id="+this.props.location.state.id,{headers: {'Content-Type': 'application/json',"Clear-Site-Data": "*"}})
        .then(res => {
             if(res.data.mes==="error"){
            console.log(res.data.res );
             }
             else {
                this.setState({cart:res.data.res});
             }
            }); 
      }
  render(){
        return(
         <div>
      <ul>
    {this.state.cart.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.quan}</div>
        <div>{item.odate}</div>
        <div>{item.ostate}</div>
      </li>
    ))}
  </ul> 
  </div>);
    }
}