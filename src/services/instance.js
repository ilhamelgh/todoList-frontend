import axios from 'axios'

const apiClient = (() => {
  let instance = null;

  const createInstance = () => {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})()

export default apiClient
