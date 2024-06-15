import {instance} from "~/services/instance";

export const userEditData = (user, callback) => {
  instance.post('/user/edit', {...user}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
