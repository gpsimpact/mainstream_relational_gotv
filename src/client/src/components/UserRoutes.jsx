import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { isLoggedIn, extractOrgs } from '../utils/auth';
import UserHome from './UserHome';
import PvIndex from './PvIndex';
import OrgChooser from './OrgChooser';
// import FourOhFour from './404';

const UserRoutes = () => {
  if (isLoggedIn()) {
    const orgs = extractOrgs();
    return (
      <Switch>
        <Route
          exact
          path="/u/"
          render={() => {
            if (orgs.length > 1) {
              return <OrgChooser orgs={orgs} />;
            }
            return <Redirect to={`/u/${orgs[0]}`} />;
          }}
        />
        <Route exact path="/u/:orgSlug" component={UserHome} />
        <Route exact path="/u/pv/:pvid" component={PvIndex} />
      </Switch>
    );
  }
  return <Redirect to="/login" />;
};

export default UserRoutes;
