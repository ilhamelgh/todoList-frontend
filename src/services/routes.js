export default {
  item: {
    getAll: {
      method: 'GET',
      url: '/items'
    },
    findById: {
      method: 'GET',
      url: (itemId) => {
        return `/items/${itemId}`
      }
    },
    createItem: {
      method: 'POST',
      url: '/items'
    },
    updateItem: {
      method: 'PUT',
      url: (itemId) => {
        return `/items/${itemId}`
      }
    },
    deleteItem: {
      method: 'DELETE',
      url: (itemId) => {
        return `/items/${itemId}`
      }
    }
  }
}