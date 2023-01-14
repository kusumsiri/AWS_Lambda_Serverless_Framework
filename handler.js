"use strict";

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        message1: "Following is the event the function triggered",
        input: event,
        Context: context,
      },
      null,
      2
    ),
  };
};
