import './App.css';
import { useEffect } from 'react';
import { HomePage } from './pages';
import { BASE_URL_API, KEY_PUBLIC_API, VERSION_API, HASH} from './utils/constants'
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get(`${BASE_URL_API}/${VERSION_API}/public/comics?ts=1000&apikey=${KEY_PUBLIC_API}&hash=${HASH}`)
      .then(({ data }) => {
        console.log("🚀 ~ .then ~ response:", data.data.results)
      })
      .catch((err) => {
        console.log("🚀 ~ useEffect ~ err:", err)
      })
  }, []);

  return (
    <>
      <h1>Demos Api 🚀 </h1>

      <HomePage />
    </>
  );
}

export default App;
