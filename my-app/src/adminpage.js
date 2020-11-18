import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './mydesign.css';
import {Card} from 'primereact/card';
import { PanelMenu } from 'primereact/panelmenu';
import {Button} from 'primereact/button';
let items = [
	{
		label: 'Women Fashions',
		items: [
			{
                label: 'clothing'
			},
            {
                label:'Add',
                icon:'pi pi-plus'
            }
            
		]
	},
	{
		label: 'Men Fashions',
		items: [
			{
				label: 'Clothing'
			},
            {
                label:'Add',
                icon:'pi pi-plus'
            }
		]
    },{
    label:'Sign Out',
    icon:'pi pi-fw pi-power-off'
    }
];
const header = <img alt="Card" width="25%" height="20%" src={require('./images/navc.png')}/>;
const footer = <span>
    <Button label="Show" className="p-button-help" style={{marginLeft: "35%"}}/>
</span>;
export default class Admin extends React.Component {
    render(){
  return(
         <div style={{display:"flex",flexDirection:"column"}}>
    <nav className="unav">
    <div style={{display:"flex",marginLeft:"8%"}}>
      <div style={{display:"flex",marginTop:"10px"}}>
   <p style={{color:"rgb(226,226,255)"}}><b>EASY</b></p>
    <img  src={require('./images/cart.png')}  width="40px" height="40px" alt="there is an error" ></img>
    <p style={{color:"rgb(226,226,255)"}}><b>SHOP</b></p>
    </div>
  <p style={{marginLeft:"50%",color:"rgb(226,226,255)"}}><b>User Name</b></p>
      <img  style={{tooltip:"click to see your cart",marginLeft:"400px",marginTop:"10px"}}src={require('./images/navc.png')}height="40px" width="60px" alt="there is an error" ></img>
      <img  style={{tooltip:"click to add new product",marginLeft:"20px",marginTop:"10px"}}src={require('./images/add.png')}height="40px" width="40px" alt="there is an error" ></img>
      </div>
      </nav>
     <div style={{display:"flex",flexDirection:"row"}}>
     <PanelMenu model={items} style={{width:'300px'}}/>
     <div style={{marginLeft:"4%",display:"flex",flexDirection:"column"}}>
          <Card footer={footer} header={header} title="product-name" subTitle="department-name">

            </Card>
            </div>
            </div>

         </div>);
    }
}