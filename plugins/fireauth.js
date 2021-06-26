import {auth} from '@/services/fireinit.js'

export default (context) => {
  const {store} = context

  return auth.onAuthStateChanged(user => {
    if(user){
      // console.log(user)
      store.commit('setUser',user)
    }
  })
}

