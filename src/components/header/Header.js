import React from 'react'

class Header extends React.Component{
    render(){
        return (
        <nav className="navbar navbar-dark bg-primary">
            <ul className="navbar-nav">
                {/*<li className="nav-item active">*/}
                <a className="navbar-brand" href="/">Limp</a>
                {/*</li>*/}
            </ul>
        </nav>
        )
      
    }
}

export default Header