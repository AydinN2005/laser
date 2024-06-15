import {instance} from "../instance";

export const sendOTPCode = (email, callback) => {
  instance.post('/Auth/signup/send-otp/email/', {email}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const signupApi = (result, callback) => {
  instance.post('/Auth/signup/email', {email: result.email, otpCode: parseInt(result.code)}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const sendOTPCodeLogin = async (email, callback) => {
  const {data} = await instance.post('/Auth/login/send-otp/email', {email})
}
export const loginApi = (result, callback) => {
  instance.post('/Auth/login/email', {email: result.email, otpCode: parseInt(result.code)}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}

export const loginWithUserPass = (result, callback) => {
  instance.post('/Auth/login/password', {email: result.email, password: result.password}).then(res => {
    callback(res.data)
  }).catch(err => {
    callback(err.response.data)
  })
}
