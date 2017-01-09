import React from 'react';
import { Link } from 'react-router';
import Post from '../Post';

const posts = [
  'Hello world!',
  'One, two, three, four',
  'Proof of concept',
];

function PageOne() {
  const postWidgets = posts.map((post, index) => <Post id={index} text={post} key={index} />);

  return (
    <div>
      <Link to={"/#like-1"}>Here</Link>
      <div style={{marginTop: '800px'}}>
        {postWidgets}
      </div>
    </div>
  );
}

export default PageOne;
