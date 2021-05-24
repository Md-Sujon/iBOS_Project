
import './App.css';
import DataInput from './component/DataInput/DataInput';
import DataReceived from './component/DataReceived/DataReceived';
import DataTable from './component/DataTable/DataTable';

function App() {
  return (
    <div className="App mt-5">
      <DataInput></DataInput>
      <DataReceived></DataReceived>
      <DataTable></DataTable>
    </div>
  );
}

export default App;
