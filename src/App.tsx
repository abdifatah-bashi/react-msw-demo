import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await response.json();
  return data;
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  useEffect(() => {}, [data]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {data &&
        data.map((user) => (
          <div key={user.id}>
            <h5>{user.name}</h5>
            <p>{user.profession}</p>
            <hr />
          </div>
        ))}
    </>
  );
}

export default App;
