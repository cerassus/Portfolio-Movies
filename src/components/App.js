import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Search from "../containers/Search";
import Movie from "../containers/Movie";
import Navi from "../components/Navi";
import Favorites from "../containers/Favorites";
import NotFound from "./NotFound";
import Footer from "./Footer";
import Test from "./Mods/Test";

const App = () => (
    <Provider store={store}>
      <Router >
        <Route component={Navi} />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/movie/:movieID" component={Movie} />
          <Route exact path="/favorites/:type/:sort/:favorite" component={Favorites} />
          <Route path="/notfound" component={() => <NotFound info="404" />} />
          <Redirect to="/notfound" />  
        </Switch>
        <Route component={Footer} />
      </Router>
    </Provider>
  )

export default App;