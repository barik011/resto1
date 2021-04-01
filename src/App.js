import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from "./components/Home";
import RestoList from "./components/RestoList";
import RestoDetail from "./components/RestoDetail";
import RestoCreate from "./components/RestoCreate";
import RestoUpdate from "./components/RestoUpdate";
import RestoSearch from "./components/RestoSearch";
import { Navbar,Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link ><Link to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/list">List</Link></Nav.Link>
      
      <Nav.Link ><Link to="/create">Create</Link></Nav.Link>
      <Nav.Link ><Link to="/search">Search</Link></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <Route path="/list">
          <RestoList />
        </Route>

        <Route path="/detail">
          <RestoDetail />
        </Route>

        <Route path="/create">
          <RestoCreate />
        </Route>

        <Route path="/search">
          <RestoSearch />
        </Route>

        <Route path="/update/:id" render={props=>(
          <RestoUpdate {...props} />
        )}>  
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

      </Router>
    </div>
  );
}

export default App;
