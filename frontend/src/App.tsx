import React from 'react';
// import './App.css';
import { useGetCommentsQuery, commentsApi } from './redux'

function App() {

  const { data, isLoading } = commentsApi.useGetCommentsQuery('')

  console.log(data)
  return (
    <div className="App">
      sdsd
      {isLoading && <h1>loading...</h1>}
    </div>
  );
}

export default App;
