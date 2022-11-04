import './App.css';
import './common.css';
import { Buttons } from "./Components/Buttons";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="scenarios-title">Light control</div>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
