import { useEffect, useState } from 'react'

const apiURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topMoviesUrl = `${apiURL}top_rated?${apiKEY}`
    getTopMovies(topMoviesUrl)
  }, [])

  return (
    <div>
      {topMovies.length > 0 &&
        topMovies.map((movie) => <p key={movie.title}>{movie.title}</p>)}
    </div>
  )
}

export default Home
