import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import Item from './Item';
  import { NewReviewForm } from './NewReviewForm';
  import { itemsApi } from '../api/ItemsApi';

function Items(props){
console.log('items component')
console.log(props)
    const { items, updateItem, deleteItem } = props;
    const match = useRouteMatch();
    const findItemById = (id) =>
        items.filter((item) => item.id == id)[0];

    const removeItem = (itemId) => {
      deleteItem(itemId);
    }

        return(
            <div>
         <h1>My Items</h1>
         <ul>
           {items.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`${match.url}/${item.id}`}>
                  {item.name}
                </Link>
                <button onClick={(e) => removeItem(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
        <Switch>
            <Route
                path={`${match.path}/:itemId`}
                render={(props) => (
                    <Item 
                    {...props} item={findItemById(props.match.params.itemId)} updateItem={updateItem}
                    />
                )}
            />
        </Switch>
       
      </div>
        )
    
    
  }

  export default Items;