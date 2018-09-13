import React, { PureComponent } from "react";
// import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import ORG_DETAILS from "../../data/queries/orgInfo";
import { withRouter } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/fontawesome-pro-light";
// import { isLoggedIn, hasOrgAccess } from '../utils/auth';
import ReactRouterPropTypes from "react-router-prop-types";

class OrgSidebarInfo extends PureComponent {
  render() {
    return (
      <Query
        query={ORG_DETAILS}
        variables={{ where: { id: this.props.match.params.orgSlug } }}
      >
        {({ loading, error, data: { organization } }) => {
          if (loading) return <div className="loader" />;
          if (error) return <p>Error!</p>;
          return (
            <div>
              <div className="content box">
                <h5 className="title">
                  You are an ambassador for {organization.name}
                </h5>
                <p>
                  <strong>For assistance contact:</strong>
                  <br />
                  {organization.contact_name} <br />
                  {organization.contact_phone ? (
                    <span>
                      <FontAwesomeIcon icon={faPhone} />{" "}
                      <span style={{ paddingLeft: 20 }}>
                        {organization.contact_phone}
                      </span>{" "}
                      <br />
                    </span>
                  ) : null}
                  <FontAwesomeIcon icon={faAt} />
                  <span style={{ paddingLeft: 20 }}>
                    {organization.contact_email}
                  </span>
                </p>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

OrgSidebarInfo.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default withRouter(OrgSidebarInfo);
