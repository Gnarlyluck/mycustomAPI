import React from 'react'
import { Link } from 'react-router-dom'
// { authenticated, currentUser, className}
const Nav = ({ authenticated, currentUser, className}) => {
  return( authenticated && currentUser ? (
    <header className={className}>
      <div className="icon"> Welcome back {currentUser} we missed you</div>
      <nav>
        <div class="nav-wrapper">
          <Link  exact to='/' class="brand-logo">Home</Link >
            <ul class="right hide-on-med-and-down">
              <li><Link to="/profile"  activeClassName="nav-active btn" > Profile</Link></li>
              <li><Link to="/posts" activeClassName="nav-active btn">Posts <i class="material-icons right">cloud</i></Link ></li>
              <li><Link to="/upload" activeClassName="nav-active btn-large">Create Post</Link ></li>
              <li><Link to="/" onClick={() => localStorage.clear()} activeClassName="nav-active">Sign Out</Link></li>
            </ul>
        </div>
      </nav>
    </header>
  ) : (
    <header className={className}>
      <div className="icon"></div>
        <nav>
          <div className="nav-wrapper">
            <Link exact to='/' class="brand-logo">Home</Link>
              <ul class="right hide-on-med-and-down">
                <li> <Link activeClassName="nav-active btn" to="/Home">Posts</Link></li>
                <li> <Link activeClassName="nav-active btn" to="/SignUp">Sign Up<i class="material-icons right">cloud</i></Link> </li>
                <li><Link activeClassName="nav-active btn-large" to="/SignIn">Sign In</Link></li>
              </ul>
        </div>
      </nav>
    </header>
    )
  )}

export default Nav