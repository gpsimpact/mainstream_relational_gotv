import React, { PureComponent } from 'react';

class Privacy extends PureComponent {
  render() {
    return (
      <div>
        <section className="hero is-vtov-blue is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Privacy Policy</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <p>
                    The MainStream Education Foundation is collecting name and email addresses for
                    this Voter to Voter tool solely for the purposes of contacting participants
                    regarding this Voter to Voter effort. We will not sell, give, or in any other
                    way distribute contact information beyond the confines of this project. Data on
                    voters and voting record used in this tool is public information made available
                    by the State of Kansas. If you have any questions, please address them to{' '}
                    <a href="mailto:admin@mainstreamcoalition.org">admin@mainstreamcoalition.org</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Privacy;
