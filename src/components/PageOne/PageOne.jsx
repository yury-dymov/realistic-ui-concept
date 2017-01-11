import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import ReadMeOne from './helpers/ReadMeOne';
import ReadMeTwo from './helpers/ReadMeTwo';
import Post from '../Post';
import { loadNext } from '../../redux/actions/readme';

const propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.number,
};

const posts = [
  'I made a small research and among @inferno_js, @elm, @preactjs, @vuejs, @cyclejs, I consider @inferno_js to be the most promising for Web UI',
  'It feels a bit strange, then you are looking into documentation of your package because you forgot the prop name :)',
  'During Christmas and New Year holidays I almost didn\'t get any spam, and now I am having 10-15 messages a day. Interesting',
  'Great video about your brain. Knowing != Understanding or how to unlearn riding bicycle',
  'Just published my new article on integrating awesome JSON API and Redux! https://habrahabr.ru/post/318958/  #JSON_API #Redux',
  'Join us on Radio QA in 30 minutes: JavaScript, testing and beyond! http://radio-qa.com/anons-vypusk-35-testiruem-s-javascript/ #radio_qa',
  'Released alpha version of jsonapi normalizer. Works great with #redux. Docs are coming!',
  'I was thinking about removing check-out for quite sometime and it is so cool that somebody eventually did it!',
  'one lesson from the past 3 months: it\'s better to think harder and work less.',
  'Going to Europe for 3 months soon. Looking forward to meet great people on various conferences and meet-ups :)',
];

function PageOne({ dispatch, page = 0 }) {
  function readNext() {
    return dispatch(loadNext());
  }

  if (page === 0) {
    return (
      <div className="readme">
        <ReadMeOne />
        <Button bsStyle="primary" onClick={readNext}>Read Next</Button>
      </div>
    );
  }

  if (page === 1) {
    return (
      <div className="readme">
        <ReadMeOne />
        <ReadMeTwo />
        <Button bsStyle="primary" onClick={readNext}>Render The Demo</Button>
      </div>
    );
  }

  const postWidgets = posts.map((post, index) => <Post id={index} text={post} key={index} />);

  return (
    <div className="readme">
      <ReadMeOne />
      <ReadMeTwo />
      <PageHeader>Posts</PageHeader>
      <div className="posts">
        {postWidgets}
      </div>
    </div>
  );
}

function mapStateToProps({ readme }) {
  return { page: readme.page };
}

PageOne.propTypes = propTypes;

export default connect(mapStateToProps)(PageOne);
