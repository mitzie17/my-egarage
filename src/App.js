import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';


export default function App() {

  const myItems = [
    {
      id: 1,
      name: 'Harry Potter Book 5',
      price: 10.99,
      condition: 'used',
      location: 'Los Angeles'
  },
  {
    id: 2,
    name: 'snowman ornament',
    price: 7.99,
    condition: 'used',
    location: 'Denver'
  },
  {
    id: 3,
    name: 'nike backpack',
    price: 15.99,
    condition: 'new',
    location: 'San Diego'
  }

    ]
  return (
    < Router>
      <div>
        <ul>
          <li>
              <Link to="/">HOME</Link>
          </li>
          <li>
              <Link to="/myitems">MY ITEMS</Link>
          </li>
          <li>
              <Link to="/itemform">ADD NEW ITEM</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/myitems">
            <MyItems myItems={myItems}/>
          </Route>
          <Route path="/itemform">
            <Form/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>
}

function MyItems({ myItems }) {
  return <h1>My Items</h1>
}

function Form() {
  return <h1>New Item Form</h1>
}

