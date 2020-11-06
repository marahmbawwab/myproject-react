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
import gallary from './gallary';
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
  //var currentLocation = window.location.pathname;
  return (
    <div >
     <Router>
    <div>
    <Nav/>
   <Switch >
   <Route  path ="/account" component={gallary}/>
   <Route  path ="/signin"  component={signin}/>
   <Route  path ="/signup" component={signup}/>
   <Route  path ="/about" component={about}/>
   <Route  path ="/" component={welcome} />
   </Switch>
   </div>
</Router>
</div>
  );}
}
export default App;
