
let server_address = process.env.REACT_APP_SERVER;



function verifyIsServerOnline() {
  try {
    const response = fetch(`${server_address}/is_online`)
    const data = response.then
    console.log(data)
    return data
  } catch(error){
    console.log(error)
    return {
      online: false
    }
  }
}

export default verifyIsServerOnline;