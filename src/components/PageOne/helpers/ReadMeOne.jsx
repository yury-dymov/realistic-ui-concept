import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';

/* eslint-disable max-len */

function ReadMeOne() {
  return (
    <div className="readme-text">
      <PageHeader>Read Me</PageHeader>
      <p>
        This is a Realistic UI demo and proof of concept application. Please use tablet or desktop for a better User Experience.
      </p>
      <p>
        With the intoduction of Single Page Applications, we no longer need to worry if user navigates to another page before the executed async request is finished. This means that we need to block a certain part of the User Interface, for example, the submitted form fields, rather than the whole application.
      </p>
      <p>
        Another extreme is &quot;Optimistic UI&quot; concept. The idea is to update the interface instantly in a way, which is expected if
        the async operation is successfully performed. Believe me; it brings a lot more problems and UX issues compared to the gains it provide. I am currently writing set of articles on this topic and will add links here upon publishing.
      </p>
      <p>
        Realistic UI is sitting somewhere in between: from one hand it is not blocking the whole UI, from another — it does not try to trick the user.
      </p>
      <p>
        Realistic UI concept can be broken down into three major parts:
      </p>
      <ol>
        <li>Loading indicators and disabling relevant UI parts</li>
        <li>UI widget, which shows active requests</li>
        <li>UI widget, which shows failed requests and let user to replay them and/or to return back to the certain page or part of the page</li>
      </ol>
    </div>
  );
}

export default ReadMeOne;

/* eslint-enable max-len */
