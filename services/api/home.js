import {instance} from "~/services/instance";

export const features = (callback) => {
  let isOkay = null;
  instance.get('home/feature/').then(res => {
    isOkay = true;
    callback(isOkay,res.data)
  }).catch(err => {
    callback(isOkay,err)
  })
}

export const getAllServices = (callback) => {
  let isOkay = null;
  instance.get('services').then(res => {
    isOkay = true;
    callback(isOkay, res.data)
  }).catch(err => {
    isOkay = false;
    callback(isOkay, err)
  })
}
