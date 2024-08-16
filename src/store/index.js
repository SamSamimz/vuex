import axios from "@/axios";
import router from "@/router";
import { useToast } from "vue-toastification";
import { createStore } from "vuex";
const toast = useToast();
const store = createStore({
    state() {
        return {
            authToken : localStorage.getItem('authToken') || null,
            products: [],
        }
    },
    getters: {
        isAuth(state) {
            return !!state.authToken;
        },
        getAuthToken(state) {
            return state.authToken;
        },
        getProducts(state) {
            return state.products
        }
    },
    mutations: {
        setAuthToken(state, authToken) {
            state.authToken = authToken;
            localStorage.setItem('authToken', authToken);
            toast.success("Login successful");
        },
       logout(state) {
            state.authToken = null;
            localStorage.removeItem('authToken');
            router.push('/auth/login');
        },
        setProducts(state, products) {
            state.products = products.data;
        }
    },
    actions: {
        async login({commit},credentials) {
            try {
                const response = await axios.post('login',credentials);
                if(response.data.auth_token) {
                    commit('setAuthToken', response.data.auth_token);
                    router.push('/');
                }else {
                    console.log("Invalid credentials");
                }
            }catch(error) {
                console.log(error);
                throw error;
            }
        },
        async fetchProducts({commit}) {
            try {
                const response = await axios.get('products');
                console.log(response.data)
                const products = response.data;
                commit('setProducts', products);
              } catch (error) {
                console.error('Failed to fetch products:', error);
              }
        }
    }
});

export default store;