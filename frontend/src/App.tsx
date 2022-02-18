import React from 'react'
import { CommentsList } from './components/CommentsList'

const App: React.FC = () => {
  return (
    <>
      <div className="box-border w-full min-w-800 container mx-auto px-0 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 flex flex-row py-5">
        <h2 className="mx-auto">loading-comments_redux-toolkit</h2>
      </div>
      <div className="box-border w-3/4 min-w-800 container mx-auto box-decoration-slice bg-gradient-to-r from-green-600 to-teal-900 text-white px-20 pt-10 mb-20">
        <CommentsList />
      </div>
    </>
  )
}

export default App
