Node microservice that allows to query for image urls.
Live at https://microservice-imgsearch-fcc.herokuapp.com/

### User stories
* I can get the image URLs, alt text and page urls for a set of images relating to a given query.
* I can paginate through the responses by adding a ?offset=2 parameter to the URL.
* I can get a list of the most recently submitted search strings.

### Example usage
* https://microservice-imgsearch-fcc.herokuapp.com/api/imgsearch/lolcats%20funny?offset=10
* https://microservice-imgsearch-fcc.herokuapp.com/api/recent/

### Example output
{
  "url": "...",
  "snippet": "...",
  "thumbnail": "...",
  "context": "..."
}
