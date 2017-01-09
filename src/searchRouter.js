const searchController = require('./searchController')
const RecentTerm = require('./recentModel')
const SearchRouter = require('express').Router()

SearchRouter.get('/:query', (req, res) => {
  const query = req.params.query
  const offset = req.params.offset

  searchController.save(query, RecentTerm)
  const response = searchController.get(query, offset)
  if (!response) res.status(500).send('api didnt return a valid response')
  res.status(200).json(response)
})

module.exports = SearchRouter

