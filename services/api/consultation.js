import {instance} from "~/services/instance";

export const getSelectedHours = (date, callback) => {
  instance.post('/Consulation/date', {
    year: parseInt(date.year), month: parseInt(date.month), day: parseInt(date.day)
  }).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const bookConsultation = (result, callback) => {
  instance.post('/Consulation/add', {
    year: parseInt(result.year),
    month: parseInt(result.month),
    day: parseInt(result.day),
    start_hour: result.hour,
    service: result.service
  }).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
