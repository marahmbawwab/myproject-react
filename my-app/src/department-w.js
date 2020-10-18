import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './mydesign.css';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
const header1 = <img alt="Card" width="20%" height="30%" src={require('./images/dress.jpg')}/>;
const header2 = <img alt="Card" width="20%" height="30%" src={require('./images/blouse.jpg')}/>;
const footer = <span>
    <Button label="View"  style={{marginLeft: "35%"}}/>
</span>;
export default class department extends React.Component {
    render(){
        return(
             <div style={{display:"flex",flexDirection:"column",backgroundColor:"pink",height:"100vh"}}> 
             <p style={{alignSelf:"center",fontSize:"35px"}}><b>Welcome to the Women's clothing departments</b> </p>
     <div style={{marginLeft:"4%",display:"flex",flexDirection:"row",marginTop:"3%",justifyContent:"center",alignItems:"center"}}>
          <Card footer={footer} header={header1} title="dresses" style={{marginLeft:"2%"}}>
            </Card>
            <Card footer={footer} header={header2} title="Blouses & Shirts" style={{marginLeft:"2%"}}>
            </Card>
            <Card style={{marginLeft:"2%"}}>
                <Button tooltip="add new" className="p-button-rounded" icon="pi pi-plus" height="20%" src={require('./images/navc.png')}/>
            </Card>
            </div>
            </div>);
    }
}