import React  from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import about from './about.js';
import welcome from './welcomep.js';
import signup from './signup.js';
import signin from './signin.js';
import Nav from './nav.js';
import gallary from './gallary.js';
import admin from './adminpage.js';
import addproduct from './addproduct.js';
import viewcart from './viewcart.js';
 class App extends React.Component {
   
  constructor(props){
    super(props);
    this.state={open:false,op:false};
  this.handleclick=this.handleclick.bind(this);
  }

  handleclick(e){
    this.op.toggle(e);
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
    }
 render(){
  return (
    <div >
     <Router>
    <div>
   <Switch >
   <Route  path ="/admin" component={admin}/>
   <Route  path ="/showcart" component={viewcart}/>
   <Route  path ="/add" component={addproduct} />
   <Route  path ="/account" component={gallary}/>
   <Route  path ="/signin"  component={signin}/>
   <Route  path ="/signup" component={signup}/>
   <Route  path ="/about" component={about}/>
   <Route  path ="/first" component={welcome} />
   <Route  path ="/" component={Nav}/>
   </Switch>
   </div>
   </Router>
</div>
  );}
}
export default App;
