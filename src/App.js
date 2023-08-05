import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

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

deleteItem = async (itemId) => {
  await itemsApi.delete(itemId);
  this.fetchItems();
}

  render() {
  
      return (
        <Container>
        <Router>
          <div>
            <ButtonGroup>
              <Button variant="outline-secondary">
              <Link to="/">HOME</Link>
              </Button>
              <Button variant="outline-secondary">
              <Link to="/items">MY ITEMS</Link>
              </Button>
              <Button variant="outline-secondary">
              <Link to="/newitemform">ADD NEW ITEM</Link>
              </Button>
            </ButtonGroup>
           
            <Switch>
              <Route path="/items">
                <Items items={this.state.items} updateItem={this.updateItem} deleteItem={this.deleteItem}/>
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
        </Container>
      );
  } 
}

export default App;

