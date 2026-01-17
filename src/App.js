
import './App.css';
import Header from './components/Header.jsx';
import Main from './Main.jsx';
import Community from './pages/Community.jsx';
import CommunityInput from './pages/CommunityInput.jsx';
import CommunityView from './pages/CommunityView.jsx';

function App() {
  return (
    <div className='App'>
    <Header/>
    {/* <Main/> */}
    {/* <Community/> */}
    {/* <CommunityView/> */}
    <CommunityInput/>
    </div>
  ); 
}

export default App;
