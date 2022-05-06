import axios from 'axios'

const LOGS_ENDPOINT = 'https://32va3d78l4.execute-api.us-east-1.amazonaws.com/Stage/logs'
const TRIGGER_ENDPOINT = 'https://32va3d78l4.execute-api.us-east-1.amazonaws.com/Stage/trigger'

export async function getLogs() {
  let response

  try {
    // let headers = {
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin' : '*'      
    // }
    response = await axios.get(LOGS_ENDPOINT, 
      // {headers: headers}
    )
  } catch (error) {
    console.error(error)
  }

  return JSON.parse(JSON.stringify(response.data))
}

export async function triggerLog() {
  let response
  
  try {
    response = await axios.get(TRIGGER_ENDPOINT)
  } catch (error) {
    console.error(error)
  }
  return response
}

export default {
  getLogs,
  triggerLog
}