export default function ({route}) {
  if (!localStorage.getItem('user')) {
    window.location.href = '/loginsignup'
  }
}
