import {instance} from "~/services/instance";
import users from "~/pages/admin/users";

export const getAllReservation = (callback) => {
  instance.get('/reservation').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const addReserve = (reserve, users, callback) => {
  let userId = 0;
  users.map(item => {
    if (reserve.user.id === item.id) {
      userId = item.id;
    }
  })
  instance.post('/reservation/book', {...reserve, user: userId}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const forceReservation = (reserve, users, callback) => {
  let userId = 0;
  users.map(item => {
    if (reserve.user.id === item.id) {
      userId = item.id;
    }
  })
  instance.post('reservation/force_book', {...reserve,user: userId}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteReserve = (userId, reserveId, callback) => {
  instance.delete(`/reservation/by-admin/${userId}/${reserveId}`).then(res => {
    callback(res.data)
  }).catch(err => {
    err.response.data
  })
}

export const getReservationOfUser = (userId, callback) => {
  instance.get(`/reservation/admin/user-reservations/${userId}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
