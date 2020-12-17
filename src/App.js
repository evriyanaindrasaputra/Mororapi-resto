import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { HomePage } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route to="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
