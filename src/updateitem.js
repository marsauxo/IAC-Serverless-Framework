"use strict";

const AWS = require("aws-sdk");

const fetchItems = async (event) => {

    const {itemStatus} = JSON.parse(event.body);
    const {id} = event.pathParameters

    const dynamodb = new AWS.DynamoDB.DocumentClient();
   
    await dynamoDB.update({
        TableName: "ItemTableNew",
        Key: {id},
        UpdateExpression: 'set itemStatus = itemStatus',
        ExpressionAttibuteValue: {
            ':itemStatus': itemStatus
        },
        ReturnValues: "ALL_NEW"
    }).pronise()       
      
    return {
        statusCode: 200,
        body: JSON.stringify(
            { msg: 'Item updated'}
        ),
    };
}

module.exports = {
    handler:updateItem
}














