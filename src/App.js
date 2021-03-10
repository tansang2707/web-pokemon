import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DefaultLayout from './layout'
import HomePage from './page/HomePage'
import ListPage from './page/ListPage'

import './assets/styles/global.scss'

function App() {
  
  const LayoutRoute = ({ path, component}) => {
    return (
      <Route exact path={path}>
        <DefaultLayout Component={component} />
      </Route>
    )
  }
  return (
    <Router>
      <Switch>
          <LayoutRoute path="/list-page" component={ListPage}/>
          <LayoutRoute path="/" component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
