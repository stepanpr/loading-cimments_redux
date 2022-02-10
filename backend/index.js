const AMOUNT_OF_COMMENTS = 4

const express = require('express')
const generateComments = require('./commentGenerator');

const app = express()

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    const cursor = parseInt(req.query.cursor) || 0
    // console.log('page: ', cursor)
    res.json({
      comments: generateComments(AMOUNT_OF_COMMENTS, cursor),
      nextCursor: cursor + 1,
    })
}) 

app.listen(PORT, () => {
    console.log(`server is started on port ${PORT}`)
})