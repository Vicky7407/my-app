import logo from './logo.svg';
import './App.css';
import Country from './Countainer/Country';
import Time from './Time/Time';
import Timefun from './Time/Timefun';
import Count from './Countainer/Counter';
import Loading from './Countainer/Loading';
import Home from './Countainer/Home';
import { useEffect, useState } from 'react';

const HomeWithLoading = Loading(Home)

function App(props) {
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  let orgData = [
    { id: 101, name: "Vinay" },
    { id: 102, name: "Gaurav" }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setData(orgData) }, 2000);
  }, [])
  return (
    <div>
      <HomeWithLoading
        isLoading={Loading}
        data={data} 
        />
    </div>
  );
}

export default App;