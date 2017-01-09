const request = require('request')
const RecentTerm = require('./recentModel')
const SearchRouter = require('express').Router()

SearchRouter.get('/:query', (req, res) => {
  const query = req.params.query
  const offset = req.query.offset || 0
  console.log(offset)
  const options = {
    url: `https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${query}&count=10&offset=${offset}`,
    headers: {'Ocp-Apim-Subscription-Key': process.env.APIKEY}
  }
  request.get(options, (err, response, body) => {
    if (err) return err
    if (!response) res.status(500).end()
    res.json(filterJSON(body))
  })
  saveRecentTerm(query)
})

function saveRecentTerm (term) {
  const recent = new RecentTerm()
  recent.term = term
  recent.time = new Date(Date.now()).toUTCString()
  recent.save()
}

function filterJSON (data) {
  let listOfImages = []
  JSON.parse(data).value.forEach((img) => {
    let image = {}
    image.url = img.contentUrl
    image.snippet = img.name
    image.thumbnail = img.thumbnailUrl
    image.context = img.hostPageUrl
    listOfImages.push(image)
  })
  return listOfImages
}

module.exports = SearchRouter

