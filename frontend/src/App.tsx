import React from 'react';
// import { useGetCommentsQuery, commentsApi } from './redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { addNewComments } from './redux/commentsSlice';
import { CommentsList } from './components/CommentsList';

function App() {
  return (
    <div>
      <CommentsList />
    </div>
  );
}

export default App;
