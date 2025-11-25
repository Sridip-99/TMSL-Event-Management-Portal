import { AppContext } from './context/Context.js';
import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const api = axios.create({
  baseURL: BACKEND_URL,
});

const App = () => {
  return (
    <AppContext.Provider value={{ BACKEND_URL, api }}> 
      <div>App</div>
    </AppContext.Provider>
  )
}

export default App