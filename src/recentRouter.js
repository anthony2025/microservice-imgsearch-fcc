const RecentTerm = require('./recentModel')
const RecentRouter = require('express').Router()

RecentRouter.route('/')
  .get((req, res) => {
    RecentTerm
      .find({})
      .sort({'time': -1})
      .limit(5)
      .exec((err, query) => {
        if (err) next(err)
        if (query) return res.status(200).json(query)
        res.status(404).end()
      })
  })

module.exports = RecentRouter
