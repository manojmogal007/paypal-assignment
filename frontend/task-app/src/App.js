import logo from './logo.svg';
import './App.css';
import Taskpage from './pages/Taskpage';
import Projectpage from './pages/Projectpage';
import Allroutes from './components/Allroutes';

function App() {
  return (
    <div className="App">
      {/* <Projectpage/> */}
      <Allroutes/>
    </div>
  );
}

export default App;
