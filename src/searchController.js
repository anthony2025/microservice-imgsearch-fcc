function getResultsFromApi (query, offset) {
  return {results: 'results from getResultsFromApi'}
}

function saveRecentTerm (term, Model) {
  const recent = new Model()
  recent.term = term
  recent.time = new Date(Date.now()).toUTCString()
  recent.save()
}

module.exports = {get: getResultsFromApi, save: saveRecentTerm}
