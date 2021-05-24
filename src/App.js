
import './App.css';
import CheckBox from './component/CheckBox/CheckBox';
import DataInput from './component/DataInput/DataInput';
import DataReceived from './component/DataReceived/DataReceived';


function App() {
  return (
    <div className="App mt-5">
      <DataInput></DataInput>
      <DataReceived></DataReceived>
      <CheckBox></CheckBox>
      
    </div>
  );
}

export default App;
