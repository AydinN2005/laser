export default async function ({redirect}) {
  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('user')) {
      return redirect('/loginsignup')
    } else {
      if (localStorage.getItem('user_role')) {
        const role = localStorage.getItem('user_role')
        if (role === 'admin') {
          return redirect('/admin')
        }
      }
    }
  }
}
