import './App.css'

function TopNav( ) {
  return (
    <nav className="top-nav">
        <ul className="top-nav-list">
            <li className = "nav-item">
                <i className="fa-solid fa-user"></i>
                <a href="#" className="nav-link">About Me</a>
            </li>
            <li className = "nav-item">
                <i className="fa-solid fa-seedling"></i>
                <a href="#" className="nav-link">Projects</a>
            </li>
            <li className = "nav-item">
                <i className="fa-solid fa-otter"></i>
                <a href="#" className="nav-link">Hobbies</a>
            </li>
        </ul>
    </nav>
  )
}

export default TopNav
