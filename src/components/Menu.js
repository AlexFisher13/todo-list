import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <ul className="nav flex-column col-2">
                <li className="nav-item">
                    <a className="nav-link active" href="">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Study</a>
                </li>
            </ul>
        );
    }
}

export default Menu;
