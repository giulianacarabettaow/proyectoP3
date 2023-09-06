import React from "react";
import { BrowserRouter,Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home/Home";
import MoviesPopularDetail from './components/moviesPopularDetail/MoviesPopularDetail';
import MoviesRatedDetail from './components/moviesRatedDetail/MoviesRatedDetail'

function App() {
  return (
    <div className="App">  
        <Switch>
          <Route path='/' exact component={Home}></Route>
          
          <Route path='/moviesPopular/id/:id' component={MoviesPopularDetail}></Route>
          <Route path='/moviesRated/id/:id' component={MoviesRatedDetail}></Route>
          
        </Switch>


   
       
   

    </div>
  );
}

export default App;
