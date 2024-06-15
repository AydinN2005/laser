import {instance} from "~/services/instance";

export const getOffDays = (callback) => {
  instance.get('offDay/all').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const addOffDay = (offDay, callback) => {
  instance.post('offDay/add', {...offDay}).then(res => {
    callback(res)
  }).catch(err => {
    console.log(err)
    callback(err.response.data)
  })
}

export const deleteOffDay = (id, callback) => {
  instance.delete(`offDay/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
