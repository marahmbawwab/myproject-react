import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './mydesign.css';
import {Card,Container,Button} from 'react-bootstrap';
import {InputText} from 'primereact/inputtext';
import { PanelMenu } from 'primereact/panelmenu';
let items = [
	{
		label: 'Women Fashions',
		items: [
			{
                label: 'clothing'
			},
			{
				label: 'Shoes'
			},{
                label: 'HandBags'
            },
            {
                label:'Watches'}
            
		]
	},
	{
		label: 'Men Fashions',
		items: [
			{
				label: 'Clothing'
			},
            { label: 'Shoes' },
            {
                label:'Watches'
            }
		]
    },{
    label:'Sign Out',
    icon:'pi pi-fw pi-power-off'
    }
];
export default class gallary extends React.Component {
    render(){
        return(
         <div style={{display:"flex",flexDirection:"column"}}>
             
      <nav className="unav">
      </nav>
      <div style={{display:"flex",marginLeft:"8%"}}>
      <div style={{display:"flex",marginLeft:"2%"}}>
   <p style={{color:"rgb(226,226,255)"}}><b>EASY</b></p>
    <img  src={require('./images/cart.png')}  width="40px" height="40px" alt="there is an error" ></img>
    <p style={{color:"rgb(226,226,255)"}}><b>SHOP</b></p>
    </div>
    <div  className="p-input-icon-left" style={{marginLeft:"4%",marginTop:"0.5%"}}>
    <i className="pi pi-search" />
    <InputText tooltip="Enter product name" tooltipOptions={{showDelay: 1000, hideDelay: 300}}style={{width:"300%"}}></InputText>
      </div>
      <p style={{marginLeft:"40%"}}><b>User Name</b></p>
      <img  style={{tooltip:"click to see your cart"}}src={require('./images/navc.png')}height="40px" width="60px" alt="there is an error" ></img>
      </div>
      <div style={{display:"flex",flexDirection:"row"}}>
     <PanelMenu model={items} style={{marginTop:"2%",width:'300px'}}/>
     <div style={{marginLeft:"4%",display:"flex",flexDirection:"column"}}>
            <Card style={{ borderStyle:"double",borderColor:"black",width:"25%" }} >
                <Card.Img variant="top" width="40px"height="40" src={require('./images/cart.png')} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card >
            </div>
            </div>
         </div>);
    }
}