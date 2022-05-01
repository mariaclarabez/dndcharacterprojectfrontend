import './App.css';
import './index.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
import CharacterView from './components/character/characterView';
import HomeView from './components/login/homeView';
import HomeScreen from './components/home';
import ProfileScreen from './components/profile';
import { Routes, Route } from "react-router-dom"
import SearchComponent from './components/SearchComponent';
import DetailsComponent from "./components/DetailsComponent";
import './index.css';

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <HomeView/> } />
            <Route path="/home" element={<HomeScreen/>}/>
          <Route path="create" element={ <CharacterView/> } />
          <Route path="/search" element={ <SearchComponent/> } />
          <Route path="/search/:searchTerm" element={ <SearchComponent/> } />

          <Route path="/profile" element={<ProfileScreen/>}/>
            <Route path="create/user/:userId" element={<CharacterView />} />
            <Route path="/details/:type/:name" element={ <DetailsComponent/> } />

        </Routes>
      </div>
    )
  }
  
  export default App