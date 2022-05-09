import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Country } from './components/Country';


function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://restcountries.com/v3.1/all')
      console.log(data)
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data?.map(elem => (<Country key={elem.name.common} name={elem.name.common} image={elem.flags.png} population={elem.population} region={elem.region} capital={elem.capital} />))}
        {/* <pre>
          {JSON.stringify(data, null, 2)}
        </pre> */}
      </header>
    </div>
  );
}

export default App;
