import {instance} from "~/services/instance";

export const getALlConsultation = (callback) => {
  instance.get('/Consulation').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getUserConsultation = (callback) => {
  instance.get('/user/consulations').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteConsultation = (id, userId, callback) => {
  instance.delete(`/Consulation/${id}/${userId}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
