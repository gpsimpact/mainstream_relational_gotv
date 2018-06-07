import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content">
            <p>
              <a href="https://be-a-voter.org/voter_to_voter">The Voter to Voter project</a> is part
              of the <a href="https://be-a-voter.org/">Be A Voter initiative</a> of the{' '}
              <a href="https://www.mainstreamcoalition.org/">MainStream Education Foundation</a>.
              Contact Lindsay with questions at{' '}
              <a href="mailto:lindsay@mainstreamcoalition.org">lindsay@mainstreamcoalition.org</a>{' '}
              or call (913) 649-3326. <Link to="/privacy">Privacy and data policy.</Link>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
