import './TopNav.css'

function TopNav( ) {
  return (
    <nav className="top-nav">
        <div className="top-nav-list">
            <div className = "nav-item">
                <i className="fa-solid fa-user"></i>
                <a href="/" className="nav-link">About Me</a>
            </div>
            <div className = "nav-item">
                <i className="fa-solid fa-seedling"></i>
                <a href="/#/projects" className="nav-link">Projects</a>
            </div>
            <div className = "nav-item">
                <i className="fa-solid fa-otter"></i>
                <a href="/#/hobbies" className="nav-link">Hobbies</a>
            </div>
        </div>
    </nav>
  )
}

export default TopNav
