import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { itemsApi } from "./api/ItemsApi";
import Home from "./Components/Home";
import Items from "./Components/Items";
import { ItemForm } from "./Components/ItemForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.fetchItems();
  }

  // Method to render all items
  fetchItems = async () => {
    const items = await itemsApi.get();
    this.setState({ items });
  };

  // Methods to create, update, and delete a specific item
  createItem = async (newItem) => {
    await itemsApi.post(newItem);
    this.fetchItems();
  };

  updateItem = async (updatedItem) => {
    await itemsApi.put(updatedItem);
    this.fetchItems();
  };

  deleteItem = async (itemId) => {
    await itemsApi.delete(itemId);
    this.fetchItems();
  };

  // Renders navbar and passes down props to the Items and ItemForm components
  render() {
    return (
      <div>
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Navbar.Brand className="navbarBrand" href="/">
            My eGarage
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/items">My Items</Nav.Link>
              <Nav.Link href="/newitemform">New Item</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Router>
            <div>
              <Switch>
                <Route path="/items">
                  <Items
                    items={this.state.items}
                    updateItem={this.updateItem}
                    deleteItem={this.deleteItem}
                  />
                </Route>
                <Route path="/newitemform">
                  <ItemForm createItem={this.createItem} />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
