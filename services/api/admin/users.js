import {instance} from "~/services/instance";

export const getAllUsers = (callback) => {
  instance.get('/Admin/getUsers').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteUser = (id, callback) => {
  instance.get(`/Admin/delete-user/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const editUserFileNumber = (fileNumber, userId, callback) => {
  instance.put(`/Admin/file-number/${fileNumber}/${userId}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
