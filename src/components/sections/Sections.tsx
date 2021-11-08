import React from "react";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {PagesLinks} from "../navbar/constants";

export class Sections extends React.PureComponent<any, never> {
  render(): React.ReactNode {
    return (
      <div className="sections">
        <Redirect from="/" to={`/${PagesLinks.Home}`} />
        <Switch>
          <Route path={`/${PagesLinks.Home}`}>

            <div className="navbar__sections">
              <Link to={`/${PagesLinks.Home}/a`} className="navbar__button">
                <p className="sidebar__button_text">Home</p>
              </Link>
              <Link to={`/${PagesLinks.Docs}/a`} className="navbar__button">
                <p className="sidebar__button_text">Docs</p>
              </Link>

              <Route path={`/${PagesLinks.Home}/a`}>
                <div>HUI</div>
              </Route>
            </div>

          </Route>
          <Route path={`/${PagesLinks.Docs}`}>
            <div>Docs</div>
          </Route>
        </Switch>
      </div>
    )
  }
}
