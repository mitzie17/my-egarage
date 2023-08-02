import React from 'react';
import { myItems } from './Components/ItemsData';
import Home from './Components/Home';
import Items from './Components/Items';
import ItemForm from './Components/ItemForm';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: myItems || []
    }
  }

  render() {
  
      return (

        < Router>
          <div>
           <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/items">MY ITEMS</Link>
              </li>
              <li>
                <Link to="/itemform">ADD NEW ITEM</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/items">
                <Items items={this.state.items}/>
              </Route>
              <Route path="/itemform">
                <ItemForm/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </Router>
      );
  } 
}

