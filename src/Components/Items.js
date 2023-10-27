import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Item from "./Item";

// The Itmes functional component receives the items array, the updateItem, and the deleteItem methods as props from the App component.
function Items(props) {
  const { items, updateItem, deleteItem } = props;

  // Saves useRouteMatch to a variable match to create link based on an item's id
  const match = useRouteMatch();
  const findItemById = (id) => items.filter((item) => item.id == id)[0];

  // Method called by delete button to remove an item. Calls the deleteItem method from the App component
  const removeItem = (itemId) => {
    deleteItem(itemId);
  };

  // Component returns links and a delete button for each of the items in the state
  // It also passes down the updateItem  method (from the App component) and a specific item as props to the Item component.
  return (
    <div>
      <h1 className="items-heading">My Items</h1>

      {items.map((item, index) => {
        return (
          <Alert key={index} variant="secondary">
            <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
            <h6>{item.brand}</h6>
            <Button
              className="deleteBtn"
              variant="danger"
              size="sm"
              onClick={(e) => removeItem(item.id)}
            >
              Delete
            </Button>
          </Alert>
        );
      })}

      <Switch>
        <Route
          path={`${match.path}/:itemId`}
          render={(props) => (
            <Item
              {...props}
              item={findItemById(props.match.params.itemId)}
              updateItem={updateItem}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default Items;
