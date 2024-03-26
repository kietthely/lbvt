import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Navigation Bar
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/Login" className="nav__link">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Dashboard;
