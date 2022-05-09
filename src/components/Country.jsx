import React from 'react'

export const Country = ({ name, image, population, region, capital }) => {
  return (
    <>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <p>Populatin: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </>
  )
}
