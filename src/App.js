import React from "react";
import { BrowserRouter,Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home/Home";
import MoviesPopularDetail from './components/MoviesPopularDetail/MoviesPopularDetail';
import MoviesRatedDetail from './components/MoviesRatedDetail/MoviesRatedDetail';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <div className="App">  

        
        <Switch>
          <Route path='/' exact component={Home}></Route>
          
          <Route path='/moviesPopular/id/:id' component={MoviesPopularDetail}></Route>
          <Route path='/moviesRated/id/:id' component={MoviesRatedDetail}></Route>
          <Route component={Error404}/>
          
          
        </Switch>


   
       
   

    </div>
  );
}

export default App;
