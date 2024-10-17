import * as admin from 'firebase-admin';

export const sendFirebaseNotification = async (
  recipient: string,
  message: string,
) => {
  const payload = {
    notification: {
      title: 'New Notification',
      body: message,
    },
  };

  return admin.messaging().sendToDevice(recipient, payload);
};
