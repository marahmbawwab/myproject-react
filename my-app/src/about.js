import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './mydesign.css';
class about extends React.Component {
  
  render(){
    return(
      <div  className="contain">
        <div><b>Easy <i class="pi pi-shopping-cart"></i> shop website is an website for selling a men's and woman's needs in an easy way with reasonable prices.
          providing different way of paying either online by using cash cards or paying when recieving. </b></div>
       <br/>
        <div><b>Feel Free to contact us :-</b></div>
        <div style={{color:"rgb(100,100,100)",paddingLeft:"60px",paddingTop:"20px"}}>
        <i class="pi pi-mobile" style={{fontSize:"25px"}} > +97059289435</i><br/><br/>
        <i class="pi pi-envelope" style={{fontSize:"25px"}}>easyshop@hotmail.com</i><br/><br/>
      <i class="pi pi-map-marker" style={{fontSize:"25px"}}> palestine-Nablus</i><br/>
      </div>
      </div>
    );
  }
}
export default about;