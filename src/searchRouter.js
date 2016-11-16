const searchController = require('./searchController')
const RecentTerm = require('./recentModel')
const SearchRouter = require('express').Router()

SearchRouter.route('/:query')
  .get((req, res) => {
    const offset = req.body.offset
    const query = req.params.query
    const results = searchController.get(query, offset)
    searchController.save(query, RecentTerm)
    res.status(200).json(results)
  })

module.exports = SearchRouter
