const request = require('request')

function getResultsFromApi (query, offset = 0) {
  const options = {
    url: `https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${query}&count=10&offset=${offset}`,
    headers: {'Ocp-Apim-Subscription-Key': process.env.APIKEY}
  }
  request.get(options, (err, res, body) => {
    if (err) return err
    return body
  })
}

function saveRecentTerm (term, Model) {
  const recent = new Model()
  recent.term = term
  recent.time = new Date(Date.now()).toUTCString()
  recent.save()
}

module.exports = {get: getResultsFromApi, save: saveRecentTerm}
