import axios from 'axios'

const LOGS_ENDPOINT = 'https://32va3d78l4.execute-api.us-east-1.amazonaws.com/Stage/logs'

export async function getLogs() {
  let response
  
  try {
    response = await axios.get(LOGS_ENDPOINT,
      {
        headers: {
          'Content-Type': 'application/json'
        }        
      }      
    )
  } catch (error) {
    console.error(error)
  }
  return response
}

export async function createLog(log) {
  let response
  
  try {
    response = await axios.post(LOGS_ENDPOINT, log)
  } catch (error) {
    console.error(error)
  }
  console.log('returning from lambda ', response)
  return response
}

export default {
  getLogs,
  createLog
}