const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB()

exports.handler = async (event) => {
    const params = {
      TableName: "Logs"
    }

    const scanResults = []
    let items
    
    do{
        items =  await docClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey  = items.LastEvaluatedKey;
    }while(typeof items.LastEvaluatedKey !== "undefined");
    
  const response = {
      statusCode: 200,
      body: JSON.stringify(scanResults),
  };
  return response;
};
