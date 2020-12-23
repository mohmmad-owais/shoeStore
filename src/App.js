import './App.css';
import Home from './components/Home/Home';
import Shoes from './components/Products/Shoes';
import ShoesDetails from './components/Products/ShoesDetails';
import {
  BrowserRouter as Router,

  Route,
 
  Switch
} from "react-router-dom";

function App() {
  


  return (
    <div className="App">
      
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
              
            <Route exact path="/products" component={Shoes}>
                
              </Route>
            
            <Route path="/products/:id" component={ShoesDetails}/>
            
            <Route path="*" component={()=><h2>404 Not Found</h2>}/>
                
          </Switch>
       </Router>
       
    
    </div>
  );
}

export default App;
