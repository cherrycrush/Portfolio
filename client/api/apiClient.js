import request from 'superagent'

export function fetchPosts () {
  return request
    .get('/v1/posts')
    .then(res => res.body)
}

export function fetchInfo () {
  return request
    .get('/v1/info')
    .then(res => res.body)
}
