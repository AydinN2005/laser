import {instance} from "~/services/instance";

export const addCategory = (result, callback) => {
  instance.post('/category/add', {...result}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const editCategory = (id, name, callback) => {
  instance.put(`/category/edit/${id}/${name}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getAllCategories = (callback) => {
  instance.get('/category').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getOneCategory = (id, callback) => {
  instance.get(`/category/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
export const deleteCategory = (id, callback) => {
  instance.delete(`/category/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
