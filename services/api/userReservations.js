import {instance} from "~/services/instance";

export const getUserReservations = (callback) => {
  instance.get('/user/reservations').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
