const userModel = {
  endpoint: 'user-api',
  name: 'userModel',
  varSchema: {
    firstName: {
      required: true,
      type: 'string'
    },
    lastName: {
      required: false,
      type: 'string'
    }
  }
}
