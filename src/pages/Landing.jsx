import React, { useState } from 'react';

import { Country } from '../components/Country'
import { useFetch } from '../hooks/useFetch';

export const Landing = () => {
  const [searchText, setSearchText] = useState('')
  const { data } = useFetch(`https://restcountries.com/v3.1/all`)

  return (
    <>
      <input type="text" placeholder='Search Country' onChange={(e) => setSearchText(e.target.value)} />
      <div>
        {data?.filter(elem => elem.name.common.toLowerCase().includes(searchText)).map(elem => (<Country key={elem.name.common} name={elem.name.common} image={elem.flags.png} population={elem.population} region={elem.region} capital={elem.capital} />))}
      </div>
    </>
  )
}
