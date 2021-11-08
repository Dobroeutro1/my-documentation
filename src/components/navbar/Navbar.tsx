import React from "react";
import { Link } from "react-router-dom";
import {PagesLinks} from "./constants";

export class Navbar extends React.PureComponent<{}, never> {
  render(): React.ReactNode {
    return (
      <div className="navbar">
        <h1 className='navbar__title'>My documentation</h1>
        <div className="navbar__sections">
          <Link to={`/${PagesLinks.Home}`} className="navbar__button">
            <p className="sidebar__button_text">Home</p>
          </Link>
          <Link to={`/${PagesLinks.Docs}`} className="navbar__button">
            <p className="sidebar__button_text">Docs</p>
          </Link>
        </div>
      </div>
    )
  }
}
