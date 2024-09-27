import axios from "./axios.js"

export default {
  async get (url, config = {}) {
    return this.send('get', url, {}, config)
  },
  async post (url, data = {}, config = {}) {
    return this.send('post', url, data, config)
  },
  async put (url, data = {}, config = {}) {
    return this.send('put', url, data, config)
  },
  async delete (url, data = {}, config = {}) {
    return this.send('delete', url, data, config)
  },
  async send(method, url, data = {}, config = {}) {
    return await axios({method, url, data, ...config});
  }
}
