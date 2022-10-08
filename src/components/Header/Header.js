import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'
const Header = () => {
    return (
        <div className="header">
        <div className="header__navbar">
          <ul className="gap-3">
            <li>
              <NavLink
                to="/weather/today"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Today
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/weather/week"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Week
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/weather/hour"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Hour
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header__logo">
          <img
            className="rounded-circle"
            src="https://i.pinimg.com/originals/89/54/38/895438247efa788551d1919d44f176ca.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default Header;