import request from 'superagent'

export function fetchPosts () {
  return request
    .get('/v1/posts')
    .then(res => res.body)
}
