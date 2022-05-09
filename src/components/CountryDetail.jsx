import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const CountryDetail = () => {
  const { id } = useParams()

  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${id}`)
        console.log(data)
        setData(data)
      } catch (error) {
        console.log("FAILED TO FETCH", error)
      }
    }
    fetchData()
  }, [id])

  return (
    <>
      <div>{id}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
