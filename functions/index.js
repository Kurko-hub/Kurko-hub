const functions = require("firebase-functions");
// [END import]

// [START helloWorld]
/**
 // eslint-disable-next-line max-len
 // eslint-disable-next-line max-len
 // eslint-disable-next-line max-len
 * Cloud Function to be triggered by Pub/Sub that logs a
 message using the data published to the
 * topic.
 */
// [START trigger]
// eslint-disable-next-line max-len
exports.helloPubSub = functions.pubsub.topic("topic-name").onPublish((message) => {
// [END trigger]
  // [START readBase64]
  // Decode the PubSub Message body.
  // eslint-disable-next-line max-len
  const messageBody = message.data ? Buffer.from(message.data, "base64").toString() : null;
  // [END readBase64]
  // Print the message in the logs.
  functions.logger.log(`Hello ${messageBody || "World"}!`);
  return null;
});
