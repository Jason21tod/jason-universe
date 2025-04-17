const checkServerStatus = async (address, axios_method, data={}) => {
  try {
    const response = await axios_method(address, data);
    if (response.status === 200) {
      console.log('connection success')
      return response.status
    } else {
      console.log('connection failed')
      return response.status
    }
  } catch (error) {
      console.log('connection failed')
      return 400
  }
};




export {checkServerStatus};