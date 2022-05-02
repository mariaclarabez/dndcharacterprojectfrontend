import './App.css';
import './index.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
import CharacterScreen from './components/character';
import HomeView from './components/login/homeView';
import HomeScreen from './components/home';
import ProfileScreen from './components/profile';
import { Routes, Route } from "react-router-dom"
import SearchComponent from './components/SearchComponent';
import DetailsComponent from "./components/DetailsComponent";

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <HomeScreen/> } />
            <Route path="/login" element={<HomeView/>}/>
          <Route path="/create" element={ <CharacterScreen/> } />
            <Route path="/profile" element={<ProfileScreen/>}/>
            <Route path="/profile/:uid" element={<ProfileScreen/>}/>
          <Route path="/search" element={ <SearchComponent/> } />
          <Route path="/search/:searchTerm" element={ <SearchComponent/> } />

          <Route path="/profile" element={<ProfileScreen/>}/>
            {/*<Route path="create/user/:userId" element={<CharacterView />} />*/}
            <Route path="/details/:type/:name" element={ <DetailsComponent/> } />

        </Routes>
      </div>
    )
  }
  
  export default App