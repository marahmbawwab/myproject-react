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
export default class gallary extends React.Component {
    render(){
        return(
         <div style={{display:"flex",flexDirection:"column"}}>
             
         </div>);
    }
}