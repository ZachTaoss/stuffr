import Characters from "./components/Characters";
import './style/main.css'
import { Route, Switch } from "react-router-dom";
import Info from "./Pages/Info";





function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Characters></Characters>
      </Route>
      <Route path="/CharInfo/ :name">
        <Info></Info>
      </Route>
    </Switch>
  );
}

export default App;
