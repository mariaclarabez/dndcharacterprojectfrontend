import './App.css';
import './index.css';
import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
import CharacterView from './components/character/characterView';
import HomeView from './components/login/homeView';
import HomeScreen from './components/home';
import ProfileScreen from './components/profile';
import WikiScreen from './components/wiki';
import { Routes, Route } from "react-router-dom"

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <HomeView/> } />
          <Route path="/home" element={<HomeScreen/>}/>
          <Route path="create" element={ <CharacterView/> } />
          <Route path="/profile" element={<ProfileScreen/>}/>
          <Route path="/wiki" element={<WikiScreen/>}/>
        </Routes>
      </div>
    )
  }
  
  export default App