import './App.css';
import './index.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
import CharacterView from './components/character/characterView';
import HomeView from './components/login/homeView';
import HomeScreen from './components/home';
import ProfileScreen from './components/profile';
import WikiScreen from './components/wiki';
import { Routes, Route } from "react-router-dom"
import './index.css';

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <HomeScreen/> } />
            <Route path="/login" element={<HomeView/>}/>
          <Route path="create" element={ <CharacterView/> } />
            <Route path="/profile" element={<ProfileScreen/>}/>
            <Route path="/profile/:uid" element={<ProfileScreen/>}/>
            <Route path="/wiki" element={<WikiScreen/>}/>
            <Route path="create/user/:userId" element={<CharacterView />} />
        </Routes>
      </div>
    )
  }
  
  export default App