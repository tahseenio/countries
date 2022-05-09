import React from 'react'
import { Link } from 'react-router-dom'

export const Country = ({ name, image, population, region, capital }) => {
  return (
    <Link to={`/${name}`}>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </Link>
  )
}
