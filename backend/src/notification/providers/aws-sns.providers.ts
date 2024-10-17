import * as AWS from 'aws-sdk';

const sns = new AWS.SNS();

export const sendSNSNotification = async (
  recipient: string,
  message: string,
) => {
  const params = {
    Message: message,
    PhoneNumber: recipient, // Assuming phone number for SMS
  };

  return sns.publish(params).promise();
};
