import {instance} from "~/services/instance";

export const addBlog = (result, callback) => {
  instance.post('/article/add', result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
export const addBlogProperty = (result, callback) => {
  instance.post('/article/add-property', result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const editBlog = (id, result, callback) => {
  instance.put(`/article/edit-article/${id}`, result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const editBlogProperty = (id,result, callback) => {
  instance.put(`/article/edit-property/${id}`, result).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteBlogPropertyImage = (id, callback) => {
  instance.delete(`/article/property-image/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteBlogProperty = (id, callback) => {
  instance.delete(`/article/property/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const deleteBlog = (id, callback) => {
  instance.delete(`/article/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const getAllBlogs = (callback) => {
  instance.get(`/article`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
export const getBlogById = (id, callback) => {
  instance.get(`/article/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
export const getBlogByCategory = (id, callback) => {
  instance.get(`/article/by-category/${id}`).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
