import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import ALL_ORGS from '../data/queries/allOrgs';

class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <section className="hero is-vtov-blue is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Relational GOTV</h1>
              <h2 className="subtitle">Organize your contacts to make a difference.</h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h2>Ready to make a difference?</h2>
                  <p>
                    Welcome to the online tool for the non-partisan Voter to Voter project. We are
                    using this website to connect partner organization ambassadors with the every
                    day voters they know. As an ambassador for your organization, you'll have a
                    dashboard where you can identify your friends, family, or peers, and guide them
                    through the process of becoming engaged voters. The tool will let you keep track
                    of their progress, and will provide tips, timely messaging, and optional tasks
                    to help you get them to vote. This project is strictly non-partisan, and the
                    tool imposes no specific position or policy messaging, except, of course, that
                    voting is important.
                  </p>
                  <p>
                    If you have any questions, you can{' '}
                    <a href="https://www.be-a-voter.org/voter_to_voter">
                      learn more about Voter to Voter at our website.
                    </a>
                  </p>
                  <h2>Voter to Voter Partner Organizations</h2>
                  <p>
                    Find your organization in the list below and click to learn more about them,
                    contact them, or register as an ambassador for their Voter to Voter effort.
                    Thank you for being engaged.
                  </p>
                  <Query
                    query={ALL_ORGS}
                    variables={{ limit: 200, orderBy: [{ sort: 'name', direction: 'ASC' }] }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <div className="loader" />;
                      if (error) return <p>Error!</p>;
                      return (
                        <ul>
                          {data.organizations.items.map(org => (
                            <li key={org.id}>
                              <Link to={`/org/${org.slug}`}>{org.name}</Link>
                            </li>
                          ))}
                        </ul>
                      );
                    }}
                  </Query>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
