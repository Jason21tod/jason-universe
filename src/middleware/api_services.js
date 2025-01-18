import axios from "axios";


let server_address = process.env.REACT_APP_SERVER;


function check_server_connection () {
    
    try {
        axios.get(server_address)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      
}

export default check_server_connection;