import {instance} from "~/services/instance";

// services apis start
export const getAllServices = (callback) => {
  instance.get('/service').then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const addService = (data, callback) => {
  instance.post('/service/add', data).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteService = (id, callback) => {
  instance.delete(`/service/delete/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    err.response.data
  })
}

export const getAService = (id, callback) => {
  instance.get(`/service/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const editService = (id, result, callback) => {
  instance.post(`/service/edit/${id}`, result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const addServiceProperty = (data, callback) => {
  instance.post('/service/add-property', data).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const editServiceProperty = (id, result, callback) => {
  instance.put(`/service/edti/property/${id}`, {title: result.title, description: result.description}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const addPropertyImages = (id, result, callback) => {
  instance.post(`/service/add-image/${id}`, result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deletePropertyImages = (id, callback) => {
  instance.delete(`/service/property-image/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteProperty = (id, callback) => {
  instance.delete(`/service/property/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const changeServiceType = (result, callback) => {
  instance.post('/service/change-type', {type: result.type, serviceId: parseInt(result.serviceId)}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
// services apis end
