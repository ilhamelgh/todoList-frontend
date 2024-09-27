import http from "../http.js";
import routes from "../routes.js";

export default {
  async getAllItems() {
    try {
      return await http.get(routes.item.getAll.url)
    } catch (error) {
      console.log(error)
    }
  },
  async findItemById(itemId) {
    try {
      return await http.get(routes.item.findById.url(itemId))
    } catch (error) {
      console.log(error)
    }
  },
  async createItem(item) {
    try {
      return await http.post(routes.item.createItem.url, item)
    } catch (error) {
      console.log(error)
    }
  },
  async updateItem(itemId, item) {
    try {
      return await http.put(routes.item.updateItem.url(itemId), item)
    } catch (error) {
      console.log(error)
    }
  },
  async deleteItem(itemId) {
    try {
      return await http.delete(routes.item.deleteItem.url(itemId))
    } catch (error) {
      console.log(error)
    }
  }
}