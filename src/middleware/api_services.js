import axios from "axios";

let server_address = process.env.REACT_APP_SERVER;


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

const checkProjectsEndpointStatus = () => {
  checkServerStatus(server_address+'/projects', axios.get, {}).then(response =>{
    console.log("API Endpoint Response Status:",response  )
    if (response !== 200 || response !== 300) {
      return false
    } return true
  }
).catch(error => {
    console.log(error)
    console.log('could not send a request to API')
    return false
})}



export {checkServerStatus, checkProjectsEndpointStatus};