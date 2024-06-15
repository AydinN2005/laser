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

