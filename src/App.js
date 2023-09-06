import React from "react";
import { BrowserRouter,Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home/Home";
import MoviesPopularDetail from './components/moviesPopularDetail/MoviesPopularDetail'


function App() {
  return (
    <div className="App">  

    <Home/>
   
        <Switch>
          <Route path='/moviesPopular/id/:id' component={MoviesPopularDetail}></Route>
        </Switch>
   

    </div>
  );
}

export default App;
