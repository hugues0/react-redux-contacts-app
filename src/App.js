import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />}></Route>
        <Route path="/add">
          <AddContact/>
        </Route>
        <Route exact path="/edit/:id">
          <h1>I am edit by id page</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
