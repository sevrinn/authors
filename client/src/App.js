import { Router } from "@reach/router";
import "./App.css";
import AllAuthors from "./components/AllAuthors";
import Create from "./components/Create";
import Details from "./components/Details";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <AllAuthors default path="/authors" />
        <Create path="/authors/new" />
        <Details path="/authors/:id" />
        <Update path="/authors/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
