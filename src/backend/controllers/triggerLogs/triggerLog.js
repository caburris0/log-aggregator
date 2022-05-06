const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB()

const SEVERITY_LEVELS = [
  'emergency',
  'critical',
  'alert',
  'error',
  'warning',
  'debug',
  'info',
  'notice'
]

function getRandomItemFromArray(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getUserAgent(event) {
  let userAgent = ''
  if (event.hasOwnProperty('requestContext')) {
    userAgent = event.requestContext.identity.userAgent
  } else {
    userAgent = 'from AWS Console'
  }
  
  return userAgent
}

function getDomainName(event) {
  let domainName = ''
  if (event.hasOwnProperty('requestContext')) {
    domainName = event.requestContext.domainName
  } else {
    domainName = 'from AWS Console'
  }
  
  return domainName
}

async function putItem(item) {
    let params = {
      TableName: 'Logs',
      Item: {
        "severity": {"S": item.severity},
        "timestamp": {"S": String(item.timestamp)},
        "requestId": {"S": item.requestId},
        "userAgent": {"S": item.callerInfo.userAgent},
        "domainName": {"S": item.callerInfo.domainName},
      }
    }
    
    await docClient.putItem(params).promise()  
}

exports.handler = async (event, context) => {
  let log = {
    severity: getRandomItemFromArray(SEVERITY_LEVELS),
    timestamp: Date.now(),
    requestId: context.awsRequestId,
    callerInfo: {
      userAgent: getUserAgent(event),
      domainName: getDomainName(event)
    }
  }
  try {
    await putItem(log)
    console.log('wrote item')
  } catch (error) {
    console.log(error)
  }
  
  const response = {
      statusCode: 200,
      body: JSON.stringify(log),
  };

  //TODO add write to dynamo table
  return response;
};
