import {instance} from "~/services/instance";

export const sendMessage = (result, callback) => {
  instance.post('/contact-us/add', {
    full_name: result.fullName,
    email: result.email,
    phone: result.phoneNumber,
    location: result.location,
    message: result.message,
  }).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getMessages = (callback) => {
  instance.get('/contact-us').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteMessage = (id, callback) => {
  instance.delete(`/contact-us/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
