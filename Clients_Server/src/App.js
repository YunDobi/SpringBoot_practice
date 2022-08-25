import axios from 'axios';
import './App.css';

const URL = "http://localhost:8080/api/v1/student";

const data = axios.get(URL).then((data) => {
  return data.data
})

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
