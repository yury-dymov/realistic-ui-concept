import React from 'react';
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
      <div>
        {postWidgets}
      </div>
    </div>
  );
}

export default PageOne;
