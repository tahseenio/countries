import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export const CountryDetail = () => {
  const { id } = useParams()
  const { data } = useFetch(`https://restcountries.com/v3.1/name/${id}`)

  return (
    <>
      <div>{id}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
