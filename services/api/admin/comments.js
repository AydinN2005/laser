import {instance} from "~/services/instance";

export const addComment = (result, callback) => {
  instance.post(`/comment/add/service`, {text: result.text, serice: parseInt(result.serviceId)}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
export const addArticleComment = (result, callback) => {
  instance.post('/comment/add/artilce', {text: result.text, article: result.id}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
export const getCommentOfService = (id, callback) => {
  instance.get(`/comment/service/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteCommentOfService = (id, callback) => {
  instance.delete(`/comment/admin/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const replyServiceComment = (result, callback) => {
  instance.post('/comment/reply', {text: result.text, comment: result.id}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getCommentOfArticle = (id, callback) => {
  instance.get(`/comment/article/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
