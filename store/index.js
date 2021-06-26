import Vuex from 'vuex';
import firebase, { auth, GoogleProvider, FacebookProvider } from '@/services/fireinit.js'
const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            user: null,
        }),
        mutations: {
            setUser(state, payload) {
                state.user = payload
            }, 
            setEverything(state,payload){
                state.user = payload
            }
        },
        actions: {
            signInEmailandPassword({ commit }) {
                return auth.signInWithEmailAndPassword(GoogleProvider);
            },
            signInWithGoogle({ commit }) {
                return auth.signInWithRedirect(GoogleProvider);
            },
            signInWithFacebook({commit}){
                return auth.signInWithRedirect(FacebookProvider);
            },
            signOut({ commit }) {
                auth.signOut().then(() => {
                  commit('setEverything', null)
                })
            }
        }
    })
}
export default createStore