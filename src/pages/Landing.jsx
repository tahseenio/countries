import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Country } from '../components/Country'

export const Landing = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v3.1/all')
        console.log(data)
        setData(data)
      } catch (error) {
        console.log("FAILED TO FETCH", error)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      {data?.map(elem => (<Country key={elem.name.common} name={elem.name.common} image={elem.flags.png} population={elem.population} region={elem.region} capital={elem.capital} />))}
    </>
  )
}
