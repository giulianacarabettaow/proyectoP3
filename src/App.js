import React from "react";
import { BrowserRouter,Switch, Route, Link} from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import MoviesPopularDetail from './components/MoviesPopularDetail/MoviesPopularDetail';
import MoviesRatedDetail from './components/MoviesRatedDetail/MoviesRatedDetail';
import Favorite from './components/Favorite/Favorite';
import Todas from './components/Todas/Todas';
import Footer from "./components/Footer/Footer";
import Error404 from './components/Error404/Error404';
import SearchResults from "./components/Sresults/Sresults";

function App() {
  return (
    <div className="App">  

        <Header/>
        
        <Switch>
          <Route path='/' exact={true} component={Home}></Route>
          <Route path='/moviesPopular/id/:id' component={MoviesPopularDetail}></Route>
          <Route path='/moviesRated/id/:id' component={MoviesRatedDetail}></Route>
          <Route path='/Favoritos' component={Favorite}></Route>
          <Route path='/verTodas' component={Todas}></Route>
          <Route path='' component={Error404}/>       
          <Route path='/sResults' component={SearchResults} />
        </Switch>

        <Footer/>

    </div>
  );
}

export default App;
