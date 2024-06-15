import {instance} from "~/services/instance";

export const addBodyArea = (result, callback) => {
  instance.post('/body-area/add', result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const editBodyArea = (id, result, callback) => {
  instance.put(`/body-area/edit/${id}`, result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteBodyArea = (id, callback) => {
  instance.delete(`/body-area/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getOneBodyArea = (id, callback) => {
  instance.get(`/body-area/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const addBodyAreaProperty = (id, result, callback) => {
  instance.post(`/body-area/add-property/${id}`, result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const editBodyAreaProperty = (id, result, callback) => {
  instance.put(`/body-area/edit-property/${id}`, result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteBodyAreaProperty = (id, callback) => {
  instance.delete(`/body-area/property/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteBodyAreaPropertyImage = (id, callback) => {
  instance.delete(`/body-area/property-image/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getAllBodyArea = (callback) => {
  instance.get('/body-area').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
