import {instance} from "~/services/instance";

export const addFaqApi = (result, callback) => {
  instance.post('/FAQ/add', {...result}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getAllFaq = (callback) => {
  instance.get('/FAQ').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteFaq = (id, callback) => {
  instance.delete(`/FAQ/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const changeFaqStatus = (id, statusName, callback) => {
  instance.put(`/FAQ/change-status/${id}/${statusName}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
