import {instance} from "~/services/instance";

export const addOffer = (result, callback) => {
  instance.post('/offer/add', result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getOffer = (callback) => {
  instance.get('/offer').then(res => {
    callback(res.data)
  }).catch(err => {
    if (err.response) {
      callback(err.response?.data)
    } else {
      callback(err)
    }
  })
}

export const deleteOffer = (callback) => {
  instance.delete('/offer').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
