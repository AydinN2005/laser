import {instance} from "~/services/instance";

export const addVideo = (result, callback) => {
  instance.post('/video/add', result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getVideo = (callback) => {
  instance.get('/video').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteVideo = (callback) => {
  instance.delete('/video').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
