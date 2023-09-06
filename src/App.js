import React from "react";
import { BrowserRouter,Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home/Home";
import MoviesPopularDetail from './components/moviesPopularDetail/MoviesPopularDetail'


function App() {
  return (
    <div className="App">  
        <Switch>
          <Route path='/moviesPopular/id/:id' component={MoviesPopularDetail}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>


   
       
   

    </div>
  );
}

export default App;
