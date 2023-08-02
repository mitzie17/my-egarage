import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import Item from './Item';

export default function Items({items}) {
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