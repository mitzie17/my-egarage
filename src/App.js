import React from 'react';

import { itemsApi } from './api/ItemsApi';
import Home from './Components/Home';
import Items from './Components/Items';
import {ItemForm} from './Components/ItemForm';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

class App extends React.Component {
  state = {
    items: []
};

componentDidMount() {
    this.fetchItems();
}

fetchItems = async () => {
    const items = await itemsApi.get();
    this.setState({ items });
}

updateItem = async (updatedItem) => {
    await itemsApi.put(updatedItem);
    this.fetchItems();
};

createItem = async (newItem) => {
  console.log(newItem)
  await itemsApi.post(newItem);
  this.fetchItems();
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
                <Link to="/newitemform">ADD NEW ITEM</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/items">
                <Items items={this.state.items} updateItem={this.updateItem}/>
              </Route>
              <Route path="/newitemform">
                <ItemForm createItem={this.createItem}/>
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

export default App;

