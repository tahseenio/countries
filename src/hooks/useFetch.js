import { useEffect, useState } from "react"
import axios from "axios"

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url)
        console.log(data)
        setData(data)

      } catch (error) {
        console.log("FAILED TO FETCH", error)
      }
    }
    fetchData()
  }, [url])

  return { data }

}