import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">
          <BiCameraMovie />
          My React Movies DB
        </Link>
      </h1>
      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}

export default NavBar
