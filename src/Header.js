import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="nav-bar">
                    <NavLink className="nav-button" exact activeClassName="selected" to="/">Home Page</NavLink>
                    <NavLink className="nav-button" exact activeClassName="selected" to="/books">List Page</NavLink>
                    <NavLink className="nav-button" exact activeClassName="selected" to="/books/:bookId">Detail Page</NavLink>
                    <NavLink className="nav-button" exact activeClassName="selected" to="/create">Create Page</NavLink>
                </div>
            </header>
        )
    }
}
