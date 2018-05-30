import React, { PureComponent } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCog, faSignOut } from '@fortawesome/fontawesome-pro-light';
import PropTypes from 'prop-types';
import { logout } from '../utils/auth';
import { withRouter, Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

class MainNav extends PureComponent {
  render() {
    return (
      <nav className="navbar has-shadow">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-4 has-text-weight-bold" to="/">
            <img src="/vtovlogo.png" alt="Voter to Voter. Personal. Powerful." height="40" />
          </Link>
          <div className="navbar-burger">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <small>Personal. Powerful.</small>
            </div>
          </div>
          <div className="navbar-end">
            {this.props.isLoggedIn ? (
              <div className="navbar-item">
                <Link className="button is-vtov-blue" to={`/u/`}>
                  Go To Dashboard!
                </Link>
              </div>
            ) : null}
            {this.props.isLoggedIn ? (
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">{this.props.email}</div>
                <div className="navbar-dropdown">
                  <div className="navbar-dropdown">
                    <div
                      className="navbar-item"
                      onClick={() => {
                        this.props.history.push('/u/settings');
                      }}
                    >
                      <span className="icon is-small">
                        <FontAwesomeIcon icon={faCog} style={{ paddingRight: 5 }} />
                      </span>
                      <span>Settings</span>
                    </div>

                    <div
                      className="navbar-item"
                      onClick={() => {
                        logout();
                        this.props.history.push('/');
                      }}
                    >
                      <div>
                        <span className="icon is-small">
                          <FontAwesomeIcon icon={faSignOut} style={{ paddingRight: 5 }} />
                        </span>
                        Sign Out
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="navbar-item">
                <div
                  className="button is-vtov-blue is-outlined"
                  onClick={() => {
                    this.props.history.push('/auth/login');
                  }}
                >
                  Log In
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

MainNav.propTypes = {
  isLoggedIn: PropTypes.bool,
  email: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(MainNav);
