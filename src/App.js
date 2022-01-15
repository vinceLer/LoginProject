import './App.css';
import Navbar from './components/Navbar';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <LoginContainer />
      </div>
    </div>
  );
}

export default App;
