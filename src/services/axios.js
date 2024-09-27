import apiClient from "./instance.js"

const instance = apiClient.getInstance()

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('usr_tkn')

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },

  async (error) => {
    // if (error.response?.status === 403) {
    //   localStorage.clear()
    //   await router.push('/login')
    // }

    return Promise.reject(error)
  }
)

export default instance