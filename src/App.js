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
              <Link to="/items">MY ITEMS</Link>
          </li>
          <li>
              <Link to="/itemform">ADD NEW ITEM</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/items">
            <Items items={myItems}/>
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

function Items({ items }) {
  const match = useRouteMatch();
  const findItemById = (id) =>
    items.filter((item) => item.id == id)[0];
  
  return (
    <div>
      <h1>My Items</h1>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`${match.url}/${item.id}`}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route
          path={`${match.path}/:itemId`}
          render={(props) => (
            <Item
              {...props}
              data={findItemById(props.match.params.itemId)}
            />
          )}
        />
        <Route path={match.path}>
            <h3>Select an item</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Item(props) {
  const { data } = props;
  return (
    <div>
      <h3>{data.name}</h3>
      <h4>Price: {data.price}</h4>
      <h4>Condition: {data.condition}</h4>
      <h4>Location: {data.location}</h4>
    </div>
  )
}

function Form() {
  return <h1>New Item Form</h1>
}

