import React from 'react';
import { Link } from 'react-router';
import PageHeader from 'react-bootstrap/lib/PageHeader';

/* eslint-disable max-len */

function ReadMeTwo() {
  return (
    <div className="readme-text">
      <PageHeader>This Demo</PageHeader>
      <p>
        There are lots of posts in this demo.
      </p>
      <p>
        The only available action is to &quot;like&quot; the post. The fake API requests have a random duration between 2 and 10 seconds; they also might fail with 30% probability.
      </p>
      <p>
        You can also navigate to <Link to="/second-page">another page</Link> anytime to check that application works fine and requests are still running even if you left the page.
      </p>
    </div>
  );
}

export default ReadMeTwo;

/* eslint-enable max-len */
