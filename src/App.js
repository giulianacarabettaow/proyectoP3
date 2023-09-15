import React from "react";
import { BrowserRouter,Switch, Route, Link} from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";
import Favorite from './components/Favorite/Favorite';
import Todas from './components/Todas/Todas';
import Footer from "./components/Footer/Footer";
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <div className="App">  

        <Header/>
        
        <Switch>
          <Route path='/' exact={true} component={Home}></Route>
          <Route path='/moviesDetail/id/:id' component={MoviesDetail}></Route>
          <Route path='/Favoritos' component={Favorite}></Route>
          <Route path='/verTodas' component={Todas}></Route>
          <Route path='' component={Error404}/>       
        </Switch>

        <Footer/>

    </div>
  );
}

export default App;
