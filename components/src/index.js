import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentPost="Tonio el amable!"/>
      <CommentDetail author="Alex" timeAgo="Today at 2:45PM" commentPost="Meh!"/>
      <CommentDetail author="Jane" timeAgo="Yesterday at 2:25PM" commentPost="Nice blog post!"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
