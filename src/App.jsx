
import Homepage from './components/Homepage';
import './App.css';
import Payload from './components/Payload';

function App() {
  let openPortal = true
  return (
    <div className="App">
      {/* <Payload /> */}
      {openPortal && <Payload />}
      <Homepage />
    </div>
  );
}

export default App;